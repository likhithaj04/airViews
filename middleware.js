const Listing=require('./models/listing');
const {listingSchema}=require("./schema.js");
const ExpressError=require('./utils/ExpressError.js');
const {reviewSchema}=require("./schema.js");
const Review=require("./models/review.js")

module.exports.validateListing=(req,res,next)=>{//joi
 let {error}=listingSchema.validate(req.body);
    console.log(error);
    if (error){
    let erMsg=error.details.map((el)=>el.message).join(",");
        // throw new ExpressError(404,error)
         throw new ExpressError(404,erMsg);
    }else{
        next();
    }
}

module.exports.validateReview=(req,res,next)=>{
     let {error}=reviewSchema.validate(req.body);
        console.log(error);
    if (error){
    let erMsg=error.details.map((el)=>el.message).join(",");
        // throw new ExpressError(404,error)
         throw new ExpressError(404,erMsg);
    }else{
        next();
    }
}

module.exports.isLoggedIn=(req,res,next)=>{
     if(!req.isAuthenticated()){//passport method
        req.session.redirectUrl=req.originalUrl//to send back user to original page and to  rfresh data we store it in locals
        req.flash("error","Log in to continue further actions");//redirect url is a session property
       return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;//  for passport not to delete previous session date before login we store it in locals
    }
    next();
}

module.exports.isOwner=async(req,res,next)=>{
            let {id}=req.params;
     let listing=await Listing.findById(id);
        if(! listing.owner.equals(res.locals.currUser._id)){
            req.flash("error","You are not the owner of the listing");
            return res.redirect(`/listings/${id}`);
        }
        next();
}

module.exports.isReviewAuthor=async(req,res,next)=>{
            let {id,reviewId}=req.params;
     let review=await Review.findById(reviewId);
    //  console.log(review)
        if(!review.author.equals(res.locals.currUser._id)){
            req.flash("error","You are not the author of this review");
            return res.redirect(`/listings/${id}`);
        }
        next()
}

