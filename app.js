const express = require("express");
const app = express();
const cors = require("cors");

// import necessery routes 

const userRoute = require("./routes/user.route")
const productsRoute= require("./routes/products.route")
const productsNameRoute = require("./routes/productsName.route")
const bookingRoute = require("./routes/booking.route")
const addProductRoute = require("./routes/addProduct.route")
const addvertisedRoute = require("./routes/advertised.route")
const paymentRouter = require("./routes/payment.route");
const CustomError = require("./utils/customError");


// middleware
app.use(express.json());
app.use(cors());


// using user routes
app.use("/api/v1/users",userRoute)

// using product routes
app.use("/api/v1/products",productsRoute)
app.use("/api/v1",productsNameRoute)

// using booking data 
app.use("/api/v1/booking",bookingRoute)

// using add product route -----------
app.use("/api/v1/product",addProductRoute)


// using advertised product route -----------
app.use("/api/v1/advertised-product",addvertisedRoute)


// payment route --------------------------
app.use("/api/v1/payment", paymentRouter)



// ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("route is working");
})

app.all("*", (req, res, next)=>{
    // res.status(404).json({
    //     status: "fail",
    //     message: `can't find the ${req.originalUrl} on the server`
    // })

    // const err = new Error(`can't find the ${req.originalUrl} on the server`);
    // err.statusCode = 404;
    // err.status = "fail";
    const err = new CustomError(`can't find the ${req.originalUrl} on the server`,404)

    next(err)
})

app.use((error, req, res, next)=>{
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 500;

    res.status( error.statusCode).json({
        status: error.statusCode,
        message: error.message
    })
})

module.exports = app;