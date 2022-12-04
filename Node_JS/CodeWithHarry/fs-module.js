const fileSystem = require('fs')

// Node.js is non blocking I/O model
const file = fileSystem.readFileSync('test.txt');
console.log(file.toString(), "1");

fileSystem.readFile('test.txt', 'utf-8', (err, data) => {
    console.log(data, err, "2")
});

console.log("Ya kya hwa");

fileSystem.writeFileSync('test.txt', "Inserted by node.js")

