const favouriteSchema=require('../../models/favourite');
const mongoose=require('mongoose');



let deleteFavourite=async(req,res,)=>{
        try {
            const updateRes=await favouriteSchema.deleteOne({_id:mongoose.Types.ObjectId(req.params.favouriteId)});
            if(updateRes.deletedCount>0){
                return res.status(200).json({
                    success:true,
                    message:"favourite removed successfully",
                    updateRes:updateRes
                })
            }
            else {
                return res.status(500).json({
                    success:false,
                    message:"fail to remove favourite",
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
    deleteFavourite
]