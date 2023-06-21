const express = require("express")
const router = express.Router()
const productController = require("../controller/products.controller")

router.route("/get-product/:category_name")
.get(productController.getProducts)

module.exports = router;