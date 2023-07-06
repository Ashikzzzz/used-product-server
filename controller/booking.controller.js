const { createBookingServices, getBookingsbyEmailServices, getABookingServices } = require("../services/booking.services");




// create a booking controller ----------------------
exports.createBooking = async (req, res) => {
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


// get booking products by email controller ----------------------
exports.getBookingByEmail = async (req, res) => {
    try {
        const query = req.query.email;
        const result = await getBookingsbyEmailServices(query)
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


// get a booking by id ----------------------
exports.getBookingById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getABookingServices(id)
        res.status(200).json({
            status: 'success',
            massage: "get a booking Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "get a booking Error",
            error: error.message
        })
    }
};