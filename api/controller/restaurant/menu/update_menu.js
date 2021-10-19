const menuModel=require('../../../models/menu');
const mongoose=require('mongoose');



let updateMenu=async(req,res,next)=>{
    try {
        let conditions={
            restaurantId:mongoose.Types.ObjectId(req.decoded._id),
            categoryId:req.body.categoryId,
            _id:mongoose.Types.ObjectId(req.body.menuId)            
        }
        let updateResult=await menuModel.updateOne(conditions,{$set:{...req.body}});
        if(updateResult.nModified==1){
            return res.status(200).json({
                success:true,
                message:"menu updated successfully",
                updateRes:updateResult
            })
        }
        else {
            return res.status(500).json({
                success:false,
                isError:true,
                message:"Fail to update menu"
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
    updateMenu,
    
]