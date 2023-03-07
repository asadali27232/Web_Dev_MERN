const express = require("express")
const mongoose = require("mongoose")
const { Schema } = mongoose
const app = express()
const port = 7000

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose
    .connect("mongodb://127.0.0.1:27017/usersDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("INFO! MongoDB Connection to usersDB is Succeeded")
    })
    .catch((error) => {
        console.log("ERR! UsersDB connection failed: " + error)
    })

const categorySchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    desc: Number,
})

const productSchema = Schema({
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    name: String,
    desc: String,
})

const Category = mongoose.model("Category", categorySchema)
const Product = mongoose.model("Product", productSchema)
