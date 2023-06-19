const { createAuserService } = require("../services/user.services");

// save a user controller-------------------------------
exports.createAuser = async(req, res, next)=>{
    try {
        const data = req.body;
        console.log(data)
        const result = await createAuserService(data)
        console.log(result)
        res.status(200).json({
            status: 'success',
            massage: "User inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "User inserted Error",
            error: error.message
        })
    }
}