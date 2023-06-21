const { getProductsNameServices } = require("../services/productsName.services")


exports.getProductsName = async(req, res, next)=>{
    try {
     
      const result = await getProductsNameServices()
       
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