const mongoose = require("mongoose")
mongoose.pluralize(null)

let Schema = mongoose.Schema

let productSchema = new Schema({
    prdID: { type: Number, required: true, unique: true },
    prdName: { type: String, required: true },
    prdPrice: { type: Number, required: true },
})

let productModel = mongoose.model("Products", productSchema)

module.exports = productModel
