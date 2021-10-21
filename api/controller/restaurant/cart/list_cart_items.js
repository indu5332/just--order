const cartModel=require('../../../models/cart');
const mongoose=require('mongoose');
const config=require('config');

let listcarts=async(req,res,next)=>{
    try {
        const allcarts = await cartModel.find({userId:mongoose.Types.ObjectId(req.decoded._id)});
        console.log(allcarts)
        return res.status(200).json({
            success:true,
            message:'carts List',
            carts:allcarts,
        });
    } catch (error) {
        return res.status(500).json({success: false,message: error.message});
    }
}

module.exports =[
    listcarts,
]