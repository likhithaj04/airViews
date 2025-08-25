const express=require("express");
const router=express.Router();
const wrapAsync=require('../utils/wrapAsync.js');
const {listingSchema}=require("../schema.js");
const Listing=require('../models/listing.js')
const ExpressError=require('../utils/ExpressError.js');
const {isLoggedIn}=require('../middleware.js');
const {isOwner,validateListing}=require('../middleware.js');
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});//multer will now store data in cloudinary's storage

const listingController=require("../controllers/listing.js");


//index route (home page)
router
.route("/")
.get(wrapAsync(listingController.index)) 

//create route
router.post("/",isLoggedIn,
    //  validateListing,
     upload.single('listing[image]'),
    wrapAsync(listingController.renderPostListing));
// .post(upload.single('listing[image]'),(req,res)=>{
//  res.send(req.file);
// });

//create new listing route
router.get("/new",isLoggedIn,(listingController.renderNewForm));

//show route
router.get("/:id", 
    wrapAsync(listingController.rendershowListing));


//edit route
router.get("/:id/edit", 
    isLoggedIn,
        isOwner,
    wrapAsync(listingController.renderEditListing));

//update
router.put("/:id",
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.renderUpdateListing));

 //delete Route
 router.delete("/:id", isLoggedIn, 
       isOwner,
    wrapAsync(listingController.renderDeleteListing));

    
// //index route (home page)
// router
// .route("/")
//    get(wrapAsync(listingController.index))
// //create route
// .post(wrapAsync(listingController.renderPostListing));

// //create new listing route
// router.get("/new",isLoggedIn,(listingController.renderNewForm));

// //show route
// router
// .route("/:id")
// .get( wrapAsync(listingController.rendershowListing))
// .put(
//     isLoggedIn,
//     isOwner,
//     validateListing,
//     wrapAsync(listingController.renderUpdateListing))
// .delete( isLoggedIn, 

//        isOwner,
//     wrapAsync(listingController.renderPostListing));

 
// //edit route
// router.get("/:id/edit", 
//     isLoggedIn,
//         isOwner,
//     wrapAsync(listingController.renderEditListing));


 module.exports=router;