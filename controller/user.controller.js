const { createAuserService, loginAuserService, findUserByEmail, getAllBuyerService, deleteABuyerServices, getAllSellerService, deleteASellerServices } = require("../services/user.services");
const { generateToken } = require("../utils/token");

// save a user controller-------------------------------
exports.createAuser = async(req, res)=>{
    try {
        const data = req.body;
        console.log("data",data)
        const result = await createAuserService(data)
        console.log("result",result)
        res.status(200).json({
            status: 'success',
            massage: "User inserted Successfully!",
            signUpData: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "User inserted Error",
            error: error.message
        })
    }
}


// login a user controller --------------------------------
exports.loginAuser = async(req, res)=>{
    try {
        const {email,password}= req.body                     //take data from body

 
        if(!password || !email){                              //cheak user email and password exists
            res.status(200).json({
                status: 'failed',
                massage: "Please insert your email and password",
            })
        }


        const user = await loginAuserService(email)        // if user exists send db the email


        if(!user){                                          // if not user exists send response
            res.status(200).json({
                status: 'failed',
                massage: "user doesn't exists",
             
       })
        }
        

        const isPasswordLegal= user.comparePassword(password, user.password)        //comparepassword


        if(!isPasswordLegal){                                         // if password is not valid pass
            res.status(200).json({
                status: 'failed',
                massage: "password is incorrect"
            })
        }

            
        // if(user.status != "active"){                             //check user is not active or active
        //     res.status(200).json({
        //         status: 'failed',
        //         massage: "user is not active"
        //     })
        // }

        const token = generateToken(user)                         // 8 . generate token

        const {password: pwd, ...others} = user.toObject()      // ignore send password to db when login

            // send response 

        
            res.status(200).json({
                status: 'success',
                massage: "user login Successfully!",
                data: {
                    others,
                    token
                       }
            })


    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "User logged in Error",
            error: error.message
        })
    }
}


//  user persistance -------------------------------
exports.getMe = async(req, res)=>{
    try {
        console.log(req?.user?.email)
       let user= await findUserByEmail(req?.user?.email)
       console.log("user",user)
        res.status(200).json({
            status: 'success',
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error: error.message
        })
    }
}


// get all buyer-----------------


// get all buyer 
exports.getAllBuyer = async(req, res)=>{
    try {
      const result = await getAllBuyerService()
    
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error: error.message
        })
    }
}


// delete a buyer 
exports.deleteABuyer = async(req, res)=>{
    try {
        const id = req.params.id
      const result = await deleteABuyerServices(id)
    
        res.status(200).json({
            status: 'Buyer delete  successful',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error: error.message
        })
    }
}


// get all buyer 
exports.getAllSeller = async(req, res)=>{
    try {
      const result = await getAllSellerService()
    
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error: error.message
        })
    }
}

// delete a seller 
exports.deleteASeller = async(req, res)=>{
    try {
        const id = req.params.id
      const result = await deleteASellerServices(id)
    
        res.status(200).json({
            status: 'Seller delete  successful',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error: error.message
        })
    }
}
