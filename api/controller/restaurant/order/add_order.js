const orderModel = require("../../../models/order");
const cartModel=require('../../../models/cart')
const stripe=require('stripe')
const mongoose=require('mongoose')
const paymentService = require("./payment");

const createorder = async (req, res, next) => {
  try{
    let totalAmount = 0.0;
    const myCartItems = await this.cartModel.find({userId:mongoose.Types.ObjectId(req.decoded._id)});
    myCartItems.forEach(item => {
      totalAmount += Number(item.price) * Number(item.quantity);
    });
    const paymentDetail = await this.paymentService.createorder(
      Number((totalAmount * 100).toFixed(2)),
      data.id,
    );
    if (paymentDetail) {
      const newDetail = await orderModel.create({
        items: myCartItems,
        transactionDetail: paymentDetail,
        shippingAddress: data.shippingAddress,
        total: totalAmount,
        orderNumber: this.generateOrderNumber(),
        user: mongoose.Types.ObjectId(req.decoded._id),
      });
      console.log(newDetail)
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ success: false, isError: true, error: error.message });
  }
};


module.exports = [
  createorder
];