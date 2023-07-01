const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")
const verifyToken = require("../middleware/verifyToken")

// signup route --------------------
router.route("/create-user")
.post(userController.createAuser)

// login router---------------------
router.route("/log-in")
.post(userController.loginAuser)


// user persistance ------------------
router.get("/me", verifyToken, userController.getMe);


// get all buyer 
router.route("/allbuyer")
.get(userController.getAllBuyer)

module.exports = router;