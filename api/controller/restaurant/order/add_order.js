const orderModel=require('../../../models/order');
const cartModel=require('../../../models/cart');
const mongoose=require('mongoose');

let addOrder =async(req, res, next)=>{
    try {
      const order={
        userId:req.decoded._id,
        ...req.body,
        shipping_address:{
            line1:req.body.line1,
            city:req.body.city,
            state:req.body.state,
            phone:req.body.phone,
        }
    }
    const addorder=await orderModel.create(order)
    const cart=await cartModel.find({_id:mongoose.Types.ObjectId(req.body.cartId)})
    console.log(cart)
    let conditions = {
        _id: mongoose.Types.ObjectId(addorder._id)
      };
    let dataToUpdate = {
        $push: {
          cart: {
            $each:cart
          },
        },
      };
    const cartorder= await orderModel.updateMany(conditions,dataToUpdate)
    if(cartorder.modifiedCount===0){
        return res.status(400).json({
            success: false,
            message: 'fail to add order'
        })
    }
    else {
        const order=await orderModel.find({_id:mongoose.Types.ObjectId(addorder._id)})
        if(order.length>0){
            return res.status(200).json({
                success: true,
                message: 'Added order',
                order: order
            })
        }
        else{
            return res.status(400).json({
                success: false,
                message: 'no order found',
            })
        }
    }
    } catch (error) {
      console.log(error)
        return res.status(500).json({success: false,message: error.message});
    }
}

module.exports =[
    addOrder,
]