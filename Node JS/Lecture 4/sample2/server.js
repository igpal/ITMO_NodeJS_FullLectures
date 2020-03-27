const ToUpperCase = require('./upperStream.js');
const tUS = new ToUpperCase();

process.stdin.pipe(tUS).pipe(process.stdout);