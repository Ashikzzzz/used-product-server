const Products = require("../model/products")

// get product by category_name
exports.getCatagoryProducts = async (category_name) => {
    const result = await Products.find({category_name:category_name});
    return result
};


// get product by id 

exports.getProductsbyIdServices = async (id) => {
    const result = await Products.findOne({_id: id});
    return result
};

