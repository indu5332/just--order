const restaurantModel=require('../../../models/size');
const mongoose=require('mongoose');


let listSize=async(req,res,next)=>{
    try {
        let conditions=[
            {
                $match:{
                    restaurantId:mongoose.Types.ObjectId(req.decoded._id),
                    menuId:mongoose.Types.ObjectId(req.params.menuId)
                }
            },
            
        ];
        let sizes=await restaurantModel.aggregate(conditions);
        console.log(sizes);
        return res.status(200).json({
            success:true,
            message:"List of sizes",
            size:sizes
        })
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
    listSize
]