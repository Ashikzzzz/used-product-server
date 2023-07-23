const { getProductsNameServices } = require("../services/productsName.services")
const asyncErrorHandler = require("./../utils/asyncErrorHandler")

exports.getProductsName =asyncErrorHandler (async(req, res)=>{
     
      const result = await getProductsNameServices()
       
        res.status(200).json({
            status: 'success',
            data: result
        })
    
})