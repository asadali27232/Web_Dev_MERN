const UserModel = require("../Models/UserModel")
let userModel = require("../Models/UserModel")
let bcrypt = require("bcryptjs")
let jwt = require("jsonwebtoken")
const jwtSign = "qwertyuiop"

module.exports = {
    signup: function (req, res) {
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(req.body.password, salt)
        req.body.password = hash

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
            .findOne({ email: req.body.email })
            .then((user) => {
                if (user) {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        const data = {
                            user: {
                                id: user._id,
                            },
                        }
                        const authToken = jwt.sign(data, jwtSign)
                        res.send({ message: "Welcome Back!", authToken })
                    } else {
                        res.status(401).send({
                            message: "Incorrect email or password!",
                        })
                    }
                } else {
                    res.status(401).send({
                        message: "Incorrect email or password!",
                    })
                }
            })
            .catch((err) => {
                console.error(err)
                res.status(500).send({ message: "Server error" })
            })
    },

    userdetail: function (req, res) {
        userModel
            .findById(req.user.id)
            .select("-password")
            .then((user) => {
                res.send(user)
            })
            .catch((err) => {
                console.error(err)
                res.status(500).send({ message: "Internal Server error" })
            })
    },
}
