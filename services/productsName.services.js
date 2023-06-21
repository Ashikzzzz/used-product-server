
const ProductsName = require("../model/categoryName")


exports.getProductsNameServices = async () => {
    const result = await ProductsName.find({});
    return result
};
