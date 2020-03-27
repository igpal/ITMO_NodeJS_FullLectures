const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом
const header = "header.html";
const footer = "footer.html";
const body = "body.html";
let finalData = '';
http.createServer((request, response) => { // вызов метода создания http сервера
    fs.readFile(header, 'utf8', (err, data) => {


        console.log(`The file ${header} is read and sent to the client\n`);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        finalData += data;
        fs.readFile(body, 'utf8', (err, bodydata) => {

            console.log(`The file ${body} is read and sent to the client\n`);
            finalData += bodydata;
            fs.readFile(footer, 'utf8', (err, footerdata) => {

                console.log(`The file ${body} is read and sent to the client\n`);
                finalData += footerdata;
                response.end(finalData);
            });
        });

    });

    console.log("Request accepted!");

}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});