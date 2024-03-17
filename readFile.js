const fs = require('fs');
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    console.log("file created");});
    fs.readFile('hello.txt', 'utf8', (err,data) => {
        console.log(data);});