const otherSchema=require('../../models/other');
const mongoose=require('mongoose');

let allService=async(req,res,next)=>{
    try {
        const items=await otherSchema.find({otherItemId:mongoose.Types.ObjectId(req.params.otherItemId)});
        return res.status(200).json({
            success:true,
            message:'All item list',
            items:items
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            isError:true,
            message:error.message
        })
    }
}

module.exports=[
    allService
]