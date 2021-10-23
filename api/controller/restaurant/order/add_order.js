const orderSchema=require('../../../models/order');

let addorder =async(req, res, next)=>{
    try {
        const order={
            ...req.body,
            userId:req.decoded._id
        }
        const addorder = await orderSchema.create(order);
        console.log(addorder)
        if(addorder){
            return res.status(200).json({
                success: true,message: 'Added order',
                order: addorder
            })
        }
        else {
          console.log("fail")
            return res.status(500).json({message: 'Fail to add order',success: false})
        }
    } catch (error) {
      console.log(error)
        return res.status(500).json({message: error.message,success: false});
    }
}

module.exports =[
    addorder,
]