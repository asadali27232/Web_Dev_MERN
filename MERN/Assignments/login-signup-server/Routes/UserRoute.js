const express = require("express")
const router = express.Router()

let userController = require("../APIs/Controllers/UserController")

router.post("/signup", userController.signup)
router.get("/login", userController.login)

module.exports = router
