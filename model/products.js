const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type: String 
    },
    original_price:{
        type: String
    },
    reslae_price:{
        type: String
    },
    picture:{
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
    parchaseYear:{
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

const Products = mongoose.model("Products",productSchema)


module.exports = Products;
