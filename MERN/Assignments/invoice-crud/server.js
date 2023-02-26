const express = require('express')
const path = require('path')
const app = express()
const port = 3001

require('./Database/invoiceDB')
let productRoutes = require('./Routes/ProductRoutes')

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")))
app.use('/product', productRoutes)

app.listen(port, () => {
    console.log(`INFO! Invoice app server is listening on port ${port}`)
})