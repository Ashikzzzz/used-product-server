const express = require("express")
const router = express.Router()
const addProductController = require("../controller/addProduct.controller")
const verifyToken = require("../middleware/verifyToken")
const authorization = require("../middleware/authorization")


router.route("/add-product")
.post(verifyToken, authorization("seller"), addProductController.createAproduct)

// get seller product 
router.route("/my-product")
.get(addProductController.getSellerProduct)

// delete a product 
router.route("/delete-product/:id")
.delete(verifyToken, authorization("seller"),addProductController.deleteSellerProduct)

// edit product ----------------------
// router.route("/edit-product/:id")
// .patch(addProductController.updateAProduct)

module.exports = router;