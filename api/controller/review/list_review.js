const reviewModel=require('../../models/review');
const mongoose=require('mongoose');
const config=require('config');

let listreviews=async(req,res,next)=>{
    try {
        const allreviews = await reviewModel.find({modelid:mongoose.Types.ObjectId(req.params.modelid)});
        await Promise.all(allreviews.map(async review=>{
            review.image=config.fileUrl+"/review/"+review.image
            console.log(allreviews)
        }))
        return res.status(200).json({
            success:true,
            message:'reviews List',
            reviews:allreviews,
        });
    } catch (error) {
        return res.status(500).json({success: false,message: error.message});
    }
}

module.exports =[
    listreviews,
]