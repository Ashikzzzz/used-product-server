const Products = require("../model/products")


exports.getCatagoryProducts = async (category_name) => {
    const result = await Products.find({category_name:category_name});
    return result
};

