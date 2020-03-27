const express = require('express');
const app = express();

app.use('/user', function(req, res, next) {
    res.send('User');
});

app.use('/', function(req, res, next) {
    res.send('Hello');
});


/*app.use(function(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

app.use(function(req, res, next){
    res.send('User');
});*/

app.listen(8080);