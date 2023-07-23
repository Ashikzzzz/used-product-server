const { createAdvertisedServices, getAdvertisedItemServices } = require("../services/advertised.services");
const asyncErrorHandler = require("./../utils/asyncErrorHandler")




// create a booking controller ----------------------
exports.createAdvertised = asyncErrorHandler (async (req, res) => {
   
        const result = await createAdvertisedServices(req.body)
        res.status(200).json({
            status: 'success',
            massage: "Create advertised product Successfully!",
            data: result
        })
   
});



// get booking products by email controller ----------------------
exports.getAdvertisedItem =asyncErrorHandler (async (req, res) => {
   
       
        const result = await getAdvertisedItemServices()
        res.status(200).json({
            status: 'success',
            massage: "Get advertised item Successfully!",
            data: result
        })
 
    
});