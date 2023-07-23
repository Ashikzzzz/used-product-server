const { createProductServices, getSellerProductServices, deleteProductServices, updateProductServices } = require("../services/addProduct.services");
const CustomError = require("../utils/customError");
const asyncErrorHandler = require("./../utils/asyncErrorHandler")

// create a booking controller ----------------------
exports.createAproduct = asyncErrorHandler (async (req, res) => {
   
        const result = await createProductServices(req.body)
        res.status(200).json({
            status: 'success',
            massage: "Create product Successfully!",
            data: result
        })
  
});


// get selller products by email controller ----------------------
exports.getSellerProduct = asyncErrorHandler( async (req, res) => {
  
        const query = req.query.email;
        const result = await getSellerProductServices(query)
        res.status(200).json({
            status: 'success',
            massage: "Get product Successfully!",
            data: result
        })
   
});
// delete a product controller ----------------------
exports.deleteSellerProduct =asyncErrorHandler (async (req, res,next) => {
   
        const id = req.params.id;
        const result = await deleteProductServices(id)

        if(!result){
            const error = new CustomError("Delete product with that id isn't found",404)
            return  next(error)
        }

        res.status(200).json({
            status: 'success',
            massage: "Delete product Successfully!",
            data: result
        })
 
});


// update a booking ----------------------
exports.updateAProduct =asyncErrorHandler (async (req, res, next) => {
  
        const id = req.params.id
        const body = req.body
        const result = await updateProductServices(id, body)
        res.status(200).json({
            status: 'success',
            massage: "Product Update successfully",
            data: result
        })
   
 
});