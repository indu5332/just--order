const orderModel=require('../../../models/order');
const mongoose=require('mongoose');

let addOrder =async(req, res, next)=>{
    try {
      const order={
        ...req.body,
        userId:req.decoded._id
    }
    const addorder = await orderModel.create(order);
    console.log(addorder)
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
      console.log(error)
        return res.status(500).json({success: false,message: error.message});
    }
    
}

module.exports =[
    addOrder,
]