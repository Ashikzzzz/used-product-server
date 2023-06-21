const express = require("express");

const router = express.Router()
const productsNameController= require("../controller/productsName.controller")


router.route("/product-name")
.get(productsNameController.getProductsName)

module.exports = router;