const menuModel=require('../../../models/menu');
const mongoose=require('mongoose');


let listMenu=async(req,res,next)=>{
    try {
        let condition=[
            {
                $match:{
                    restaurantId:mongoose.Types.ObjectId(req.decoded._id)
                }
            },
        ];
        let menus=await menuModel.aggregate(condition);
        return res.status(200).json({
            success:true,
            message:"Menu List",
            menus:menus
        })
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
    listMenu
]