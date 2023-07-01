const express = require("express")
const router = express.Router()
const addProductController = require("../controller/addProduct.controller")

router.route("/add-product")
.post(addProductController.createAproduct)

// get seller product 
router.route("/my-product")
.get(addProductController.getSellerProduct)

// delete a product 
router.route("/delete-product/:id")
.delete(addProductController.deleteSellerProduct)

module.exports = router;