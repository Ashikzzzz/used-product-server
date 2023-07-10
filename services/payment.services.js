const Payment = require("../model/payment")
const Booking = require("../model/booking")


exports.createAPaymentServices = async (id) => {
    const result = await Booking.findById({ _id: id });
    console.log("result", result)
    return result;
};


// success payment success -------------
exports.successPaymentServices = async (transactionId) => {
    const result = await Payment.updateOne({ transactionId }, { $set: { paymentStatus: true, paidAt: new Date() } });
    return result;
}
