const menuModel=require('../../../models/menu');
const mongoose=require('mongoose');


let listMenu=async(req,res,next)=>{
    try {
        console.log(req.decoded._id)
        let condition=[
            {
                $match:{
                    restaurantId:mongoose.Types.ObjectId(req.params.restaurantId)
                }
            },
        ];
        let menus=await menuModel.aggregate(condition);
        await Promise.all(menus.map(async menu=>{
            menu.imageUrl=config.fileUrl+"/"+menu.imageUrl
            console.log(menus)
        }))
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