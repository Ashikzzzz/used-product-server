const express = require("express")
const router = express.Router()
const bookingController = require("../controller/booking.controller")
const verifyToken = require("../middleware/verifyToken")
const authorization = require("../middleware/authorization")



router.route("/product-booking")
.post(verifyToken,authorization("buyer"), bookingController.createBooking)

// get booking product by user Email 
router.route("/product-booking/:email")
.get(verifyToken, authorization("buyer"), bookingController.getBookingByEmail)

module.exports = router;