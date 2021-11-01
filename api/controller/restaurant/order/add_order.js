//const orderSchema=require('../../../models/order');
const paymentService=require('../payment/payment_service');
const cartModel=require('../../../models/cart');
const mongoose=require('mongoose');

let processPayment =async(req, res, next)=>{
    try {
        totalAmount=0.0
   /*   const allcarts = await cartModel.find({userId:mongoose.Types.ObjectId(req.decoded._id)});
      allcarts.forEach(cartItem => {
        totalAmount += Number(cartItem.price) * Number(cartItem.quantity)
    });*/

      const paymentDetail = await paymentService.process(
        Number((totalAmount * 100).toFixed(2)),req.body.id);
          if(paymentDetail){
            return res.status(200).json({
              success:true,
              paymentDetail:paymentDetail
            })
          }
          else{
            console.log("unsuccessful")
          }
    } catch (error) {
      console.log(error)
        return res.status(500).json({success: false,message: error.message});
    }
}

module.exports =[
    processPayment,
]