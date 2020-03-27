const express = require('express');
const app = express();

const userRout = require('./routes/user.js');

app.use('/user', userRout);

app.use(function(req, res, next) {
    console.log('!!!');
    res.send('Hello');
});
app.listen(8080);