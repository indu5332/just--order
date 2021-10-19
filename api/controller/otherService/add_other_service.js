const otherService=require('../../models/otherService');

let addOtherService=async(req,res,next)=>{
    try {
        const addRes=await otherService.create(req.body);
        if(addRes){
            return res.status(200).json({
                success:true,
                message:"Item added successfully",
            });
        }
        else {
            return res.status(500).json({
                success:false,
                isError:true,
                message:'Fail to add item'
            });
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
    addOtherService
]