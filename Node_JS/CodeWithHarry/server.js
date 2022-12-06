const http = require('http');

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end("<h1>This is my first serve from a node.js server.</h1>")
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})