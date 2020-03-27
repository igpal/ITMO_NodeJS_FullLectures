let http = require('http');
let fs = require('fs');
let fsPromises = fs.promises;

let tasks = ['header.html', 'body.html', 'body2.html', 'footer.html'];

http.createServer(function(req, res) {

    readFiles().then((arrData) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(arrData.join(''));
    }).catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end();
    });
}).listen(8080);

function readFiles() {
    let arr = tasks.map(promiseReadFile);
    return Promise.all(arr);
}

function promiseReadFile(filename) {
    return fsPromises.readFile(filename, { encoding: 'utf8', flag: 'r' })
}