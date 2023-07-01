const AddProduct = require("../model/addProduct")

exports.createProductServices = async (data) => {

    if (data) {
        const bookedData = await AddProduct.findOne({productName : data.productName});
        if (bookedData) {
            const result = "already created";
            return result
        }
        else {
            const result = await AddProduct.create(data);
            return result;
        }
    }
};


// get products by user email ------------------------

exports.getSellerProductServices = async (email) => {
    const result = await AddProduct.find({email: email});
    return result
};
// delete products ------------------------

exports.deleteProductServices = async (id) => {
    const result = await AddProduct.deleteOne({_id: id});
    return result
};