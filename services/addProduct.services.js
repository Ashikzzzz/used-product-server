const AddProduct = require("../model/addProduct")

exports.createProductServices = async (data) => {

    if (data) {
        const bookedData = await AddProduct.findOne({name : data.name});
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