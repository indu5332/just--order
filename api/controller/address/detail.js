const AddressSchema=require('../../models/address');
const mongoose=require('mongoose')

let detaildetailress=async(req,res)=>{
    try {
        const detailRes=await AddressSchema.find({userId:mongoose.Types.ObjectId(req.decoded._id)});
        if(detailRes){
            return res.status(200).json({
                success:true,
                message:"Address detail",
                detailRes:detailRes
            })
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
    detaildetailress
]