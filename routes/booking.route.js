const express = require("express")
const router = express.Router()
const bookingController = require("../controller/booking.controller")
const verifyToken = require("../middleware/verifyToken")


router.route("/product-booking")
.post(verifyToken, bookingController.createBooking)

// get booking product by user Email 
router.route("/product-booking/:email")
.get(verifyToken, bookingController.getBookingByEmail)

module.exports = router;