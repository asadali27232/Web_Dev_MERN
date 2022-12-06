const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url == '/') {
        const webpage = fs.readFileSync('index.html')
        res.end(webpage.toString())
    } else if (req.url == '/home') {
        res.end('<h1>Welcome to my Local Node.js Server</h1>');
    } else if (req.url == '/about') {
        res.end('<h1>This server is build using node.js</h1>')
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})