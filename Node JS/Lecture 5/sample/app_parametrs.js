const express = require('express');
const app = express();

app.use('/admin/:id', function(req, res, next) {
    if (req.params.id === "0") {
        return next('ID admin error');
    }
    res.send('Hello Admin');
});

app.use(function(err, req, res, next) {
    console.log(err);
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.send('Error');
});
app.listen(8080);