const mongoose = require('mongoose');


const addProductSchema = new mongoose.Schema({
    productName:{
        type: String 
    },
    email:{
        type: String
    },
    productPrice:{
        type: String
    },
    productURL:{
        type:String
    },
    category_name:{
        type: String
    },
    condition:{
        type: String
    },
    contact:{
        type: String
    },
    location:{
        type: String
    },
    description:{
        type: String
    },
 
    usedYear:{
        type: String
    }
    
   
},
{
    timestamps: true,
}
)

const AddProduct = mongoose.model("AddProduct",addProductSchema)


module.exports = AddProduct;