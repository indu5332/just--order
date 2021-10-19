const mongoose = require('mongoose');
const otherSchema=require('../../models/other');

let deleteItem=async(req,res,next)=>{
    try {
        const deleteRes=await otherSchema.deleteOne({_id:mongoose.Types.ObjectId(req.params.itemId)});
        if(deleteRes.deletedCounts>0){
            return res.status(200).json({
                success:true,
                message:"Item Deleted successfully"
            });
        }
        else {
            return res.status(500).json({
                success:false,
                isError:true,
                message:'Fail to delete item'
            });
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
    deleteItem
]