const otherService=require('../../models/otherService');
const mongoose=require('mongoose');

let deleteOtherService=async(req,res,next)=>{
    try {
        const deleteRes=await otherService.deleteOne({_id:mongoose.Types.ObjectId(req.params.serviceId)});
        if(deleteRes.deletedCounts>0){
            return res.status(200).json({
                success:true,
                message:"Service Deleted successfully"
            });
        }
        else {
            return res.status(500).json({
                success:false,
                isError:true,
                message:'Fail to delete Service'
            });
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            isError:true,
            message:'Fail to add item'
        }); 
    }
}

module.exports=[
    deleteOtherService
]