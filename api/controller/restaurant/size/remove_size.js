const size=require('../../../models/size');


let addMenu=async(req,res,next)=>{
        let conditions={
            restaurantId:mongoose.Types.ObjectId(req.decoded._id),
            _id:mongoose.Types.ObjectId(req.body.sizeId)            
        }
        try {
            let updateRes=await restaurantModel.updateOne(conditions,dataToUpdate);
            if(updateRes.modifiedCount==1){
                return res.status(200).json({
                    success:true,
                    message:"size removed successfully",
                    updateRes:updateRes
                })
            }
            else {
                return res.status(500).json({
                    success:false,
                    message:"fail to remove successfully",
                    updateRes:updateRes
                })
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success:false,
                isError:true,
                error:error
            })
        }
}

module.exports=[
    addMenu
]