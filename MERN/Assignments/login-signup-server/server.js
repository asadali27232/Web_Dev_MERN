const express = require("express")
const app = express()
const port = 5000

require('./Database/Mongo')
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Authentication Server is Running!")
})
app.use('/user', require('./Routes/UserRoute'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
