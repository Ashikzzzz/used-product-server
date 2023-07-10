const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name:{
        type: String 
    },
   
    reslae_price:{
        type: String
    },
    email:{
        type:String
    },
    transactionId: {
        type: String,
    },
    paymentStatus: {
        type: Boolean,
       
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
    },
    paidAt: {
        type: Date
    },
    currency: {
        type: String
    }
    
   
},
{
    timestamps: true,
}
)

const Payment = mongoose.model("Payment",paymentSchema)


module.exports = Payment;

