const mongoose = require("mongoose")
mongoose.set("strictQuery", true)

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
