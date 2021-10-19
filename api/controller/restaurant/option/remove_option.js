const restaurantModel=require('../../../models/menu_option');
const mongoose=require('mongoose');



let removeMenu=async(req,res,next)=>{
        try {
            let updateRes=await restaurantModel.deleteOne({_id:mongoose.Types.ObjectId(req.body.optionId)});
            if(updateRes.deletedCount>0){
                return res.status(200).json({
                    success:true,
                    message:"option removed successfully",
                    updateRes:updateRes
                })
            }
            else {
                return res.status(500).json({
                    success:false,
                    message:"fail to remove option",
                    updateRes:updateRes
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success:false,
                isError:true,
                error:error
            })
        }
}


module.exports=[   
    removeMenu
]