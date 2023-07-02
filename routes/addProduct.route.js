const express = require("express")
const router = express.Router()
const addProductController = require("../controller/addProduct.controller")
const verifyToken = require("../middleware/verifyToken")

router.route("/add-product")
.post(verifyToken, addProductController.createAproduct)

// get seller product 
router.route("/my-product")
.get(verifyToken, addProductController.getSellerProduct)

// delete a product 
router.route("/delete-product/:id")
.delete(verifyToken, addProductController.deleteSellerProduct)

module.exports = router;