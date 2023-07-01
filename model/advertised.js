const mongoose = require('mongoose');


const advertisedProductSchema = new mongoose.Schema({
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

const AdvertisedProduct = mongoose.model("AdvertisedProduct",advertisedProductSchema)


module.exports = AdvertisedProduct;