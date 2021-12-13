const reviewSchema=require('../../models/review');

let addreview=async(req,res)=>{
    try {
        const addreviewRes=await reviewSchema.create({...req.body,addedBy:req.decoded._id});
        if(addreviewRes){
            return res.status(200).json({
                success:true,
                message:"review added successfully",
                review:addreviewRes
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            isError:true,
            message:error.message
        })
    }
}
module.exports=[
    addreview
]