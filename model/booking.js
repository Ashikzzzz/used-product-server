const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name:{
        type: String 
    },
   
    reslae_price:{
        type: String
    },
    email:{
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
   
    usedYear:{
        type: String
    }
    
   
},
{
    timestamps: true,
}
)

const Booking = mongoose.model("Booking",bookingSchema)


module.exports = Booking;
