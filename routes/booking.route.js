const express = require("express")
const router = express.Router()
const bookingController = require("../controller/booking.controller")
// const verifyToken = require("../middleware/verifyToken")
// const authorization = require("../middleware/authorization")

router.route("/product-booking")
.post(bookingController.createBooking)

// get booking product by user Email 
router.route("/product-booking/:email")
.get(  bookingController.getBookingByEmail)

// get a booking by id
router.route("/booking-a-product/:id")
.get(bookingController.getBookingById)

module.exports = router;