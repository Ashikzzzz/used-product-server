const express = require("express")
const router = express.Router()
const advertisedController = require("../controller/advertised.controller")


router.route("/create-advertise")
.post( advertisedController.createAdvertised)

// get advertised product ----------------
router.route("/get-advertised-product")
.get(advertisedController.getAdvertisedItem)

module.exports = router;