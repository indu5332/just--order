/*const orderSchema=require('../../../models/order');
const cartModel=require('../../../models/cart');
const mongoose=require('mongoose')


let addorder =async(req, res, next)=>{
    try {

        const myCartItems = await this.cartModel.find({userId:mongoose.Types.ObjectId(req.decoded._id)});
        myCartItems.forEach(item => {
            totalAmount += Number(item.price) * Number(item.quantity)
        });
        totalAmount = Number(totalAmount.toFixed(2)) + 5;
      console.log('cart amount', totalAmount);
      const paymentDetail = await this.paymentService.processPayment(
      Number((totalAmount * 100).toFixed(2)),
      data.id,
    );
    if (paymentDetail) {
      const newDetail = await this.orderService.addNewOrder({
        items: myCartItems,
        transactionDetail: paymentDetail,
        shippingAddress: data.shippingAddress,
        total: totalAmount,
        orderNumber: this.generateOrderNumber(),
        user: req['raw']['decoded']['decoded']['_id'],
      });
      await this.cartservice.emptyMyCart(
        req['raw']['decoded']['decoded']['_id'],
      );
      return {
        success: true,
        message: 'Order created successfully',
        order: newDetail,
      };
    }
  }
        const order={
            ...req.body,
            userId:req.decoded._id
        }
        const addorder = await orderSchema.create(order);
        if(addorder){
            return res.status(200).json({
                success: true,message: 'Added order',
                order: addorder
            })
        }
        else {
            return res.status(500).json({message: 'Fail to add order',success: false})
        }
    } catch (error) {
        return res.status(500).json({message: error.message,success: false});
    }
}

module.exports =[
    addorder,
]*/