const sizeSchema=require('../../../models/size');



let addMenu=async(req,res,next)=>{      
        try {
            let updateRes=await sizeSchema.create({...req.body,restaurantId:req.decoded._id});
            if(updateRes){
                return res.status(200).json({
                    success:true,
                    message:"size added successfully",
                    updateRes:updateRes
                })
            }
            else {
                return res.status(500).json({
                    success:false,
                    message:"fail to add size",
                    updateRes:updateRes
                })
            }
        } catch (error) {
            console.log(error)
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