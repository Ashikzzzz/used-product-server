// developer error stack -------------

const CustomError = require("../utils/customError")

const devError=(res,error)=>{
    res.status( error.statusCode).json({
        status: error.statusCode,
        message: error.message,
        stackTrace : error.stack,
        error: error
    })
}

// production error stack -----------
const productionError =(res, error)=>{
    if(error.isOperational){
        res.status( error.statusCode).json({
            status: error.statusCode,
            message: error.message,
        })
    }
    else{
        res.status(500).json({
            status: "Error",
            message: "Something went wrong" 
        })
    }
}

// castErrorHandler
const castErrorHandler =(err)=>{
    const msg = `Invalid value ${err.path} : ${err.value}`
   return new CustomError(msg, 404)
}

module.exports = (error, req, res, next)=>{
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 500;

if(process.env.NODE_ENV === "development"){
    devError(res, error)
} 
else if(process.env.NODE_ENV === "production"){
// let err = {...error}

    if(error.name === "CastError"){
        error =  castErrorHandler(error)
    }

    productionError(res,error)
}

    
}