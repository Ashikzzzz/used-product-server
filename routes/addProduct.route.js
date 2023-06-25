const express = require("express")
const router = express.Router()
const addProductController = require("../controller/addProduct.controller")

router.route("/add-product")
.post(addProductController.createAproduct)

module.exports = router;