const addressModel=require('../../models/address')
const mongoose=require('mongoose');


let updateAddress=async(req,res,next)=>{
    try {
        const updateRes=await addressModel.updateOne(
            {userId:mongoose.Types.ObjectId(req.decoded._id)},
            {$set:req.body}
        )
        if(updateRes.modifiedCount>0){
            return res.status(200).json({success:true,message:"address updated successfully"})
        }
    } catch (error) {
        return res.status(500).json({ success: false, isError: true, error: "error" });
    }
}

module.exports = updateAddress;