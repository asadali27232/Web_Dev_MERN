let productModel = require("../Models/ProductsModel")

module.exports = {
    create: function (req, res) {
        productModel
            .create(req.body)
            .then(() => {
                res.send({
                    success: true,
                    message: "Product added successfully with below parameters",
                    parameters: req.body,
                })
            })
            .catch((err) => {
                res.send("ERR! Something went wrong " + err)
            })
    },

    update: function (req, res) {
        productModel
            .findByIdAndUpdate(req.params.prdID, req.body)
            .then(() => {
                res.send({
                    success: true,
                    message:
                        "Product updated successfully with below parameters",
                    parameters: req.body,
                })
            })
            .catch((err) => {
                res.send("ERR! Something went wrong " + err)
            })
    },

    delete: function (req, res) {
        productModel
            .findByIdAndRemove(req.params.prdID)
            .then(() => {
                res.send(
                    "Product deleted successfully with ID: " + req.params.prdID
                )
            })
            .catch((err) => {
                res.send("ERR! Something went wrong " + err)
            })
    },

    getAll: function (req, res) {
        productModel
            .find()
            .then((results) => {
                res.send(results)
            })
            .catch((err) => {
                res.send("ERR! Something went wrong " + err)
            })
    },

    getByID: function (req, res) {
        productModel
            .findById(req.params.prdID)
            .then((results) => {
                res.send(results)
            })
            .catch((err) => {
                res.send("ERR! Something went wrong " + err)
            })
    },
}
