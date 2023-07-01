const { createAdvertisedServices } = require("../services/advertised.services");

// create a booking controller ----------------------
exports.createAdvertised = async (req, res) => {
    try {
        const result = await createAdvertisedServices(req.body)
        res.status(200).json({
            status: 'success',
            massage: "Create advertised product Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Create product Error",
            error: error.message
        })
    }
};
