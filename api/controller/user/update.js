const userModel=require('../../models/user')
const mongoose=require('mongoose');


let updateUserModel=async(req,res,next)=>{
    try {
        const updateRes=await userModel.updateOne(
            {_id:mongoose.Types.ObjectId(req.decoded._id)},
            {$set:req.body}
        )
        if(updateRes.modifiedCount>0){
            return res.status(200).json({success:true,message:"Profile updated successfully"})
        }
    } catch (error) {
        return res.status(500).json({ success: false, isError: true, error: "error" });
    }
}

module.exports = updateUserModel;