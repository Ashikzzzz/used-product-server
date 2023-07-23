const { createBookingServices, getBookingsbyEmailServices, getABookingServices } = require("../services/booking.services");
const CustomError = require("../utils/customError");
const asyncErrorHandler = require("./../utils/asyncErrorHandler")

// create a booking controller ----------------------
exports.createBooking =asyncErrorHandler (async (req, res) => {
  
        const result = await createBookingServices(req.body)
        res.status(200).json({
            status: 'success',
            massage: "Create Booking Successfully!",
            data: result
        })
   
});


// get booking products by email controller ----------------------
exports.getBookingByEmail =asyncErrorHandler (async (req, res) => {
   
        const query = req.query.email;
        const result = await getBookingsbyEmailServices(query)
        res.status(200).json({
            status: 'success',
            massage: "Create Booking Successfully!",
            data: result
        })
  
});


// get a booking by id ----------------------
exports.getBookingById =asyncErrorHandler (async (req, res,next) => {

        const id = req.params.id;
        const result = await getABookingServices(id)

        if(!result){
            const error = new CustomError("booking with that id isn't found",404)
            return  next(error)
        }

        res.status(200).json({
            status: 'success',
            massage: "get a booking Successfully!",
            data: result
        })

   
});