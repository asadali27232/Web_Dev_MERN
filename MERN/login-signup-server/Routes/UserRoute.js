const express = require("express")
const router = express.Router()
const auth = require('../APIs/Middleware/Authenticate')

let userController = require("../APIs/Controllers/UserController")

router.post("/signup", userController.signup)
router.post("/login", userController.login)
router.post("/userdetail", auth, userController.userdetail)

module.exports = router
