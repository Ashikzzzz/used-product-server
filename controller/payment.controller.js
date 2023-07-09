
const SSLCommerzPayment = require('sslcommerz-lts')
const { createAPaymentServices } = require("../services/payment.services");


// create a payment -------------------------------
exports.createAPayment = async (req, res) => {

    try {
        const paymentInfo = req.body;
        // console.log("paymentInfo",paymentInfo)
        const id = paymentInfo.id
        const findBookingInfo = await createAPaymentServices(id)
        console.log("findBookingInfo",findBookingInfo)
        
        const transactionId = findBookingInfo.id.toString();

        const data = {
            total_amount: findBookingInfo?.reslae_price,
            currency: paymentInfo.currency,
            tran_id: transactionId, // use unique tran_id for each api call
            success_url: 'http://localhost:3030/success',
            fail_url: 'http://localhost:3030/fail',
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: paymentInfo.name,
            product_category: paymentInfo. category_name,
            product_profile: 'general',
            cus_name: 'Customer Name',
            cus_email: paymentInfo.email,
            cus_add1:paymentInfo.location,
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: paymentInfo.contact,
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };

        // console.log("data",data)
        // res.send(data)
        const sslcz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASS, false)
        sslcz.init(data).then(async apiResponse => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            console.log("GatewayPageURL",GatewayPageURL)
            res.send( {url : GatewayPageURL})
            console.log('Redirecting to: ', GatewayPageURL)
        
        });


    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}