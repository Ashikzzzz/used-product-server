const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")
const verifyToken = require("../middleware/verifyToken")
const authorization = require("../middleware/authorization")

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
.get(verifyToken, authorization("admin"), userController.getAllBuyer)


// get all buyer 
router.route("/allbuyer/:id")
.delete(verifyToken, authorization("admin"), userController.deleteABuyer)

// get all seller
router.route("/allseller")
.get(verifyToken, authorization("admin"), userController.getAllSeller)

// delete a seller ------------
router.route("/allseller/:id")
.delete(verifyToken, authorization("admin"), userController.deleteASeller)

module.exports = router;