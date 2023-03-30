let jwt = require("jsonwebtoken")
const jwtSign = "qwertyuiop"

const auth = (req, res, next) => {
    const token = req.header("auth-token")
    if (!token) {
        res.status(401).send("Unable to Authenticate!")
    }
    const data = jwt.verify(token, jwtSign)
    req.user = data.user
    next()
}

module.exports = auth
