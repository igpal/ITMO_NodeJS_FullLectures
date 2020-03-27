const express = require('express');
const app = express();

app.get('/user', function(req, res, next) {
    res.send('User');
});

app.use(function(req, res, next) {
    res.send('Hello');
});
app.listen(8080);