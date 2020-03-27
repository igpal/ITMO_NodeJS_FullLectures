let http = require('http');
let url = "http://profi.ifmo.ru/frontend-developer/";

http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log(chunk);
    });

    res.on('end', function() {
        console.log("Downloaded site " + url);
    });
});