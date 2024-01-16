const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000

require("./Database/Mongo")
app.use(express.json())-
app.use(cors())

app.get("/", (req, res) => {
    res.send("Authentication Server is Running!")
})
app.use("/user", require("./Routes/UserRoute"))

app.listen(port, () => {
    console.log(`Authentication server listening on port ${port}`)
})
