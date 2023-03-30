const mongoose = require("mongoose")
mongoose.pluralize(null)

let UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: new Date() },
})

module.exports = mongoose.model("Users", UserSchema)
