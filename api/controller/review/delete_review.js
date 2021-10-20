const mongoose = require('mongoose');
const reviewSchema=require('../../models/review');

let deletereview =async(req, res, next)=>{
    try {
        const deletereview=await reviewSchema.deleteOne({_id:mongoose.Types.ObjectId(req.params.reviewId)})
        console.log(req.params.reviewId)
        if(deletereview.deletedCount>0){
            return res.status(200).json({success:true, message:'review deleted successfully'})
        }
        else {
            return res.status(500).json({message:'Failed to delete review',success: false});
        }
    } catch (error) {
        return res.status(500).json({message: error.message,success: false});
    }
}

module.exports = [
    deletereview
]