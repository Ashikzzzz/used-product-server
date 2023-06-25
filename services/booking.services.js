const Booking = require("../model/booking")



// create a new booking only one time ----
exports.createBookingServices = async (data) => {

    if (data) {
        const bookedData = await Booking.findOne({name : data.name});
        if (bookedData) {
            const result = "already booked";
            return result
        }
        else {
            const result = await Booking.create(data);
            return result;
        }
    }
};


// get products by user email ------------------------

exports.getBookingsbyEmailServices = async (email) => {
    const result = await Booking.find({email: email});
    return result
};
