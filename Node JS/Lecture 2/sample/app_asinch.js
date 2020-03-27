const fs = require('fs');

fs.readFile('app_asinch.js', 'utf-8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

console.log('Все текущие команды JS выполнены');