const express = require("express")
const router = express.Router()
const bookingController = require("../controller/booking.controller")


router.route("/product-booking")
.post(bookingController.createBooking)

module.exports = router;