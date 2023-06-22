const { createBookingServices } = require("../services/booking.services");




// create a booking controller ----------------------
exports.createBooking = async (req, res, next) => {
    try {
        const result = await createBookingServices(req.body)
        res.status(200).json({
            status: 'success',
            massage: "Create Booking Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Create Booking Error",
            error: error.message
        })
    }
};
