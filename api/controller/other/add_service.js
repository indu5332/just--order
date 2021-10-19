const otherSchema=require('../../models/other');

let addItem=async(req,res,next)=>{
    try {
        const addItemRes=await otherSchema.create({...req.body,addedBy:req.decoded._id});
        if(addItemRes){
            return res.status(200).json({
                success:true,
                message:"Item added successfully",
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
    addItem
]