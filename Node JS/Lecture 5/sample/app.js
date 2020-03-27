const express = require('express');
const app = express();
const userRout = require('./routes/user.js');

app.use(function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

app.use(function(req, res, next) {
    res.send('User');
});
app.listen(8080);