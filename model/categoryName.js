const mongoose = require('mongoose');


const productNameSchema = new mongoose.Schema({
    category_name:{
        type: String 
    }
},
{
    timestamps: true,
}
)


const ProductsName = mongoose.model("ProductsName",productNameSchema)


module.exports = ProductsName;