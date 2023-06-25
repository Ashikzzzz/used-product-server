const { createProductServices } = require("../services/addProduct.services");


// create a booking controller ----------------------
exports.createAproduct = async (req, res) => {
    try {
        const result = await createProductServices(req.body)
        res.status(200).json({
            status: 'success',
            massage: "Create product Successfully!",
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