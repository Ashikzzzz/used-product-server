const User = require("../model/user")


// save a user services ---------------------------
exports.createAuserService = async(data)=>{
    const result = await User.create(data)
    return result;
}