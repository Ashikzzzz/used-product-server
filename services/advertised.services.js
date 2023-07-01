const AdvertisedProduct = require("../model/advertised")

exports.createAdvertisedServices = async (data) => {
const result = await AdvertisedProduct.create(data)
return result
};
