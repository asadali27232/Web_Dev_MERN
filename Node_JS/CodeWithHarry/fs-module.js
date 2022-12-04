const fileSystem = require('fs')

fileSystem.readFile('asad-info.js', 'utf-8', (err, data) => {
    console.log(data, err)
});
// Node.js is non blocking I/O model
fileSystem.readFile('ali-info.js', 'utf-8', (err, data) => {
    console.log(data, err)
});
// Will be console.log before the above statements
const file = fileSystem.readFileSync('asad-info.js');
console.log(file);

