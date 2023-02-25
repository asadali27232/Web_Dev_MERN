const express = require('express')
const router = express.Router()

let productController = require('../App/APIs/Controllers/ProductController')

router.post('/addProduct', productController.create)
router.get('/getProduct', productController.getAll)
router.get('/getProduct/:prdID', productController.getByID)
router.put('/updateProduct/:prdID', productController.update)
router.delete('/deleteProduct/:prdID', productController.delete)

module.exports = router