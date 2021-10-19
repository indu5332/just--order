const menuModel=require('../../../models/menu');



let addMenu=async(req,res,next)=>{
        try {
            let updateRes=await menuModel.create({...req.body,restaurantId:req.decoded._id});
            if(updateRes){
                return res.status(200).json({
                    success:true,
                    message:"menu added successfully",
                    updateRes:updateRes
                })
            }
            else {
                return res.status(500).json({
                    success:false,
                    message:"fail to add menu",
                    updateRes:updateRes
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
    addMenu
]