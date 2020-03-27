const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer(function(req, res){
    console.log(req.url);
    
    let urlObj = url.parse(req.url);
    console.log(urlObj);
    let obj = {};
    
    if(urlObj.query){
        obj = querystring.parse(urlObj.query);
        console.log(obj);
    } 
    if(obj.text1 || obj.test){
        res.writeHead(200, {
               'Content-Type': 'text/plain; charset=utf-8'
           });
           res.end('Спасибо всё получил');
    } else {     

    
        fs.readFile('index.html', 'utf-8', (err, data)=>{
           if(err){
                res.statusCode = 404;
                return res.end();
           }
           res.writeHead(200, {
               'Content-Type': 'text/html'
           });
           res.end(data);
        });
    }
    
}).listen(8080);