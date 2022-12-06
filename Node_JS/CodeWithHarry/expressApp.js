const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World! from express.js</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>This web is served by express.js server</h1>');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});