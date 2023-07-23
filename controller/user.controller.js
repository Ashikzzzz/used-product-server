const { createAuserService, loginAuserService, findUserByEmail, getAllBuyerService, deleteABuyerServices, getAllSellerService, deleteASellerServices } = require("../services/user.services");
const { generateToken } = require("../utils/token");
const asyncErrorHandler = require("./../utils/asyncErrorHandler")


// async handler function -------------
// const asyncErrorHandler = (func)=>{
//     return (req,res,next)=> {
//         func(req, res, next).catch(err => next(err))
//     }
   
    
// }

// save a user controller-------------------------------
exports.createAuser =asyncErrorHandler (async(req, res)=>{
 
        const data = req.body;
        console.log("data",data)
        const result = await createAuserService(data)
        console.log("result",result)
        res.status(200).json({
            status: 'success',
            massage: "User inserted Successfully!",
            signUpData: result
        })
   
})


// login a user controller --------------------------------
exports.loginAuser =asyncErrorHandler (async(req, res)=>{
    
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


    
})


//  user persistance -------------------------------
exports.getMe =asyncErrorHandler (async(req, res)=>{
    
        console.log(req?.user?.email)
       let user= await findUserByEmail(req?.user?.email)
       console.log("user",user)
        res.status(200).json({
            status: 'success',
            data: user
        })
    
})


// get all buyer-----------------


// get all buyer 
exports.getAllBuyer =asyncErrorHandler (async(req, res)=>{
   
      const result = await getAllBuyerService()
    
        res.status(200).json({
            status: 'success',
            data: result
        })
   
})


// delete a buyer 
exports.deleteABuyer =asyncErrorHandler (async(req, res,next)=>{
   
        const id = req.params.id
      const result = await deleteABuyerServices(id)

      if(!result){
        const error = new CustomError("Seller with that id isn't found",404)
        return  next(error)
    }
    
        res.status(200).json({
            status: 'Buyer delete  successful',
            data: result
        })
    
})


// get all buyer 
exports.getAllSeller =asyncErrorHandler (async(req, res)=>{
   
      const result = await getAllSellerService()
    
        res.status(200).json({
            status: 'success',
            data: result
        })
    
})

// delete a seller 
exports.deleteASeller =asyncErrorHandler (async(req, res)=>{
   
        const id = req.params.id
      const result = await deleteASellerServices(id)
    
        res.status(200).json({
            status: 'Seller delete  successful',
            data: result
        })
    
})
