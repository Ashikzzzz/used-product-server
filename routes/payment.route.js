const express = require("express");
const router = express.Router();
const paymentController= require("../controller/payment.controller")

router.route("/ssl-request")
    .post(paymentController.createAPayment)


module.exports = router;