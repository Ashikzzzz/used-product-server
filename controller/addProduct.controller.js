const { createProductServices, getSellerProductServices, deleteProductServices, updateProductServices } = require("../services/addProduct.services");


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


// get selller products by email controller ----------------------
exports.getSellerProduct = async (req, res) => {
    try {
        const query = req.query.email;
        const result = await getSellerProductServices(query)
        res.status(200).json({
            status: 'success',
            massage: "Get product Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Get product Error",
            error: error.message
        })
    }
};
// delete a product controller ----------------------
exports.deleteSellerProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteProductServices(id)
        res.status(200).json({
            status: 'success',
            massage: "Delete product Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Delete product Error",
            error: error.message
        })
    }
};


// update a booking ----------------------
exports.updateAProduct = async (req, res, next) => {
    try {
        const id = req.params.id
        const body = req.body
        const result = await updateProductServices(id, body)
        res.status(200).json({
            status: 'success',
            massage: "Product Update successfully",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            massage: "Product Update error",
            error: error.message
        })
    }
};