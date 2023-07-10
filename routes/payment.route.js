const express = require("express");
const router = express.Router();
const paymentController= require("../controller/payment.controller")

router.route("/ssl-request")
    .post(paymentController.createAPayment)

    // success payment route -----------

    router.route("/ssl-request-success")
    .post(paymentController.successPayment)


module.exports = router;