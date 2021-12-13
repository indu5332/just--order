const favouriteSchema=require('../../models/favourite');
const mongoose=require('mongoose');


let listFavourite=async(req,res,next)=>{
    try {
        let condition=[
            {
                $match:{
                    userId:mongoose.Types.ObjectId(req.decoded._id)
                }
            },
        ];
        let favourites=await favouriteSchema.aggregate(condition);
        return res.status(200).json({
            success:true,
            message:"favourite List",
            favourites:favourites
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
    listFavourite
]