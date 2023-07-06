const Payment = require("../model/payment")
const Booking = require("../model/booking")


exports.createAPaymentServices = async (id) => {
    const result = await Booking.findById({ _id: id });
    console.log("result", result)
    return result;
};
