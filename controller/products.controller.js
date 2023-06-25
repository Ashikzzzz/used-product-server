const { getCatagoryProducts, getProductsbyIdServices } = require("../services/products.services");

// get product by category_name 

exports.getProducts = async(req, res)=>{
    try {
      const products = req.params.category_name;
      console.log(products)
      const result = await getCatagoryProducts(products)
       
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error: error.message
        })
    }
}


// get product by id 
exports.getProductsById = async(req, res)=>{
    try {
      const result = await getProductsbyIdServices(req.params.id)
      console.log("result",result)
       
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error: error.message
        })
    }
}