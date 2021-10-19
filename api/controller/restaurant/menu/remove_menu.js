const menuModel=require('../../../models/menu');
const mongoose=require('mongoose');



let deleteMenu=async(req,res,next)=>{
        let conditions={
            restaurantId:mongoose.Types.ObjectId(req.decoded._id),     
            categoryId:mongoose.Types.ObjectId(req.body.categoryId),
            _id:mongoose.Types.ObjectId(req.body.menuId)       
        }
        try {
            let deleteRes=await menuModel.deleteOne(conditions);
            if(deleteRes.deletedCounts>0){
                return res.status(200).json({
                    success:true,
                    message:"menu removed successfully",
                    deleteRes:deleteRes
                })
            }
            else {
                return res.status(500).json({
                    success:false,
                    message:"fail to remove menu",
                    deleteRes:deleteRes
                })
            }
        } catch (error) {
            return res.status(500).json({
                success:false,
                isError:true,
                error:error
            })
        }
}


module.exports=[
    deleteMenu
]