const favouriteSchema=require('../../models/favourite');

let addFavourite=async(req,res,next)=>{
    try {
        const favourite={
            ...req.body,
            userId:req.decoded._id
        }
        const addRes=await favouriteSchema.create(favourite);
        if(addRes){
            return res.status(200).json({
                success:true,
                message:"favourite added successfully",
                addRes:addRes
            });
        }
        else {
            return res.status(500).json({
                success:false,
                isError:true,
                message:'Fail to add favourite'
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
    addFavourite
]