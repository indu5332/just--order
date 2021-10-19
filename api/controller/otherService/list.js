const otherSchema=require('../../models/otherService');

let listAllService=async(req,res,next)=>{
    try {
        const allService=await otherSchema.find({});
        return res.status(200).json({
            success:true,
            message:'all items',
            items:allService
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            isError:true,
            message:error.message
        })
    }
}

module.exports=[
    listAllService
]