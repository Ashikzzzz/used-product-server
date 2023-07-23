const { getCatagoryProducts, getProductsbyIdServices } = require("../services/products.services");
const CustomError = require("../utils/customError");
const asyncErrorHandler = require("./../utils/asyncErrorHandler")
// get product by category_name 

exports.getProducts =asyncErrorHandler (async(req, res,next)=>{
   
      const products = req.params.category_name;
      console.log(products)
      const result = await getCatagoryProducts(products)
       
      if(!result){
        const error = new CustomError("Product with that name isn't found",404)
        return  next(error)
    }

        res.status(200).json({
            status: 'success',
            data: result
        })
   
})


// get product by id 
exports.getProductsById =asyncErrorHandler (async(req, res, next)=>{
    
      const result = await getProductsbyIdServices(req.params.id)
      console.log("result",result)
      if(!result){
        const error = new CustomError("product with that id isn't found",404)
        return  next(error)
    }
        res.status(200).json({
            status: 'success',
            data: result
        })
  
})