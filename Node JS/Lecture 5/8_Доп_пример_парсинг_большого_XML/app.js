const express = require('express');
const logger = require('morgan');
const ParserStream = require('./parserStream');
var fs = require('fs');

const app = express();

app.use(logger('tiny')); 

app.use(express.static('public'));

app.post('/file', (req, res, next)=>{
    var newFileStream = fs.createWriteStream('temp.xml', {flags: 'w'});
    let parser = new ParserStream();
    req.pipe(parser).pipe(newFileStream);   
});

app.listen(8080);