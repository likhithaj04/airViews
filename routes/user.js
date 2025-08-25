const express=require("express");
const router=express.Router();
const User=require('../models/user');
const wrapAsync = require("../utils/wrapAsync");
const passport=require('passport');
const { saveRedirectUrl } = require("../middleware");

const userController=require("../controllers/users");

router.get("/signup",userController.renderSignupForm);

router.post("/signup",wrapAsync(userController.signup));


router.get("/login",userController.renderLoginForm);

router.post("/login",
    saveRedirectUrl,// so that the passport wont refresh or reset the previous session url
    passport.authenticate("local",
    {failureRedirect:'/login',failureFlash:true}),
    userController.postLoginForm);

router.get('/logout',userController.logout)

module.exports=router; 