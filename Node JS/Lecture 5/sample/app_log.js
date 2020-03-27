const express = require('express');
const app = express();
const logger = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');

let options = {
    dotfiles: 'ignore',
    maxAge: "1d",
    //etag: false
}

app.use(express.static('public', options));

let accessLogStream = rfs.createStream('acess.log', {
    interval: '1d',
    path: path.join(__dirname, 'logs')
});

app.set('x-powered-by', false);

app.use(logger('tiny', { stream: accessLogStream }));

app.listen(8080);