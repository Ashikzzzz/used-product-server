const { getCatagoryProducts } = require("../services/products.services");

exports.getProducts = async(req, res, next)=>{
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