const express=require("express");
const router=express.Router({mergeParams:true});
// const {reviewSchema}=require("../schema.js");
const wrapAsync=require('../utils/wrapAsync.js');

// const ExpressError=require('../utils/ExpressError.js');

const {validateReview, isLoggedIn,isReviewAuthor}=require('../middleware.js');
 

const reviewController=require("../controllers/review.js")

 //reviews post route
router.post("/",
   isLoggedIn,
   validateReview,
   wrapAsync(reviewController.renderAddReview));

//delete reviews route 
router.delete("/:reviewId",
   isLoggedIn,
   isReviewAuthor,
    wrapAsync(reviewController.destroyReview));

 module.exports=router;