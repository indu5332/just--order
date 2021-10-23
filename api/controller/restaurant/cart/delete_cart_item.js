const cartModel=require('../../../models/cart');
const mongoose=require('mongoose');



let removecartItem=async(req,res,next)=>{
        try {
            let updateRes=await cartModel.deleteOne({_id:mongoose.Types.ObjectId(req.params.cartId)});
            if(updateRes.deletedCount>0){
                return res.status(200).json({
                    success:true,
                    message:"detail removed successfully",
                    updateRes:updateRes
                })
            }
            else {
                return res.status(500).json({
                    success:false,
                    message:"fail to remove detail",
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
    removecartItem
]