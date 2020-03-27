const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const {Nuxt, Builder}  = require('nuxt');
const config = require('../nuxt.config.js');

const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);

/*app.use(function(req, res, next){
    req.session = {
        isAuth: true
    };
    next();
});*/

app.get('/api/users', function(req, res, next){
   //res.status(404).end();
   res.json({title:'Test title', content:'Test content'}); 
});

const connections = new Set();

io.on('connection', socket => {
    
    connections.add(socket);
    
    let i = 0;
    function sendMessage(){
        if(connections.has(socket)) {
            console.log('Send: ' + 'Test message №' + i)
            socket.emit('newMessage', {message: 'Test message №' + i});
            i++;
            setTimeout(sendMessage, 5000);
        }
    }
    
    setTimeout(sendMessage, 5000);
    
    socket.once('disconnect', function () {
        connections.delete(socket);
    });
})

builder.build()
  .then(() => {
  // Рендерить каждый маршрут с Nuxt.js
    app.use(nuxt.render)
    // Запустить сервер
    server.listen(8000, ()=>{
       console.log('Server run in 8000 port'); 
    });
  });