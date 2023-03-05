let userModel = require("../Models/UserModel")

module.exports = {
    signup: function (req, res) {
        userModel
            .create(req.body)
            .then(() => {
                res.send("User Added Successfully!")
            })
            .catch((err) => {
                res.send("ERR! Something Went Wrong " + err)
            })
    },
    login: function (req, res) {
        userModel
            .find()
            .then(() => {
                res.send("Logged In Successfully!")
            })
            .catch((err) => {
                res.send("ERR! Something Went Wrong " + err)
            })
    },
}
