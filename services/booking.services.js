const Booking = require("../model/booking")



// create a new booking only one time ----
exports.createBookingServices = async (data) => {

    if (data) {
        const bookedData = await Booking.findOne({email : data.email});
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
