const express = require('express');
const app = express();

let options = {
    dotfiles: 'ignore',
    maxAge: "1d",
    //etag: false
}

app.use(express.static('public', options));

app.listen(8080);