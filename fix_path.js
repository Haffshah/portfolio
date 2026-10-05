const fs = require('fs');
let main = fs.readFileSync('main.js', 'utf8');
main = main.replace(/\.\.\/assets\//g, './assets/');
fs.writeFileSync('main.js', main);
