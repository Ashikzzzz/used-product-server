const Booking = require("../model/booking")



// create a new booking only one time ----
exports.createBookingServices = async (data) => {

    const result = await Booking.create(data);
    return result;
};


// get products by user email ------------------------

exports.getBookingsbyEmailServices = async (email) => {
    const result = await Booking.find({email: email});
    return result
};


// get a booking by id ------------------------

exports.getABookingServices = async (id) => {
    const result = await Booking.findOne({_id: id});
    return result
};
