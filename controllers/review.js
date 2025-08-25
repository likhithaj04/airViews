const Review=require("../models/review")
const Listing=require("../models/listing");

module.exports.renderAddReview=async(req,res)=>{
   let listing =await Listing.findById(req.params.id);
   let newReview=new Review(req.body.review);// Review model in review Schema)    also pass the entire reviiew typed in the show.ejs to this review model
   newReview.author=req.user._id;
      // console.log(newReview);
   listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();//save everythong in existing databse also
    console.log("new review saved");
    req.flash("success","New Review added");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyReview=async(req,res)=>{
let {id,reviewId}=req.params;
await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
 await Review.findByIdAndDelete(reviewId);
   req.flash("success","review deleted");
res.redirect(`/listings/${id}`);
}
