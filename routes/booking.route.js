const express = require("express")
const router = express.Router()
const bookingController = require("../controller/booking.controller")


router.route("/product-booking")
.post(bookingController.createBooking)

// get booking product by user Email 
router.route("/product-booking/:email")
.get(bookingController.getBookingByEmail)

module.exports = router;