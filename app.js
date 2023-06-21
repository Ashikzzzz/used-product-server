const express = require("express");
const app = express();
const cors = require("cors");

// import necessery routes 

const userRoute = require("./routes/user.route")
const productsRoute= require("./routes/products.route")

// middleware
app.use(express.json());
app.use(cors());


// using user routes
app.use("/api/v1/users",userRoute)

// using product routes
app.use("/api/v1/products",productsRoute)


// ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
})

module.exports = app;