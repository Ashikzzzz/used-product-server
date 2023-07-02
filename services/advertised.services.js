const AdvertisedProduct = require("../model/advertised")

exports.createAdvertisedServices = async (data) => {
const result = await AdvertisedProduct.create(data)
return result
};


// get advertised item ----------------
exports.getAdvertisedItemServices=async()=>{
    const result = await AdvertisedProduct.find({}).limit(3)
    return result
}