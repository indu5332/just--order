const cartSchema=require('../../../models/cart');

let addcart =async(req, res, next)=>{
    try {
        const cart={
            ...req.body,
            userId:req.decoded._id
        }
        const addcart = await cartSchema.create(cart);
        if(addcart){
            return res.status(200).json({
                success: true,message: 'Added cart',
                cart: addcart
            })
        }
        else {
            return res.status(500).json({message: 'Fail to add cart',success: false})
        }
    } catch (error) {
        return res.status(500).json({message: error.message,success: false});
    }
}

module.exports =[
    addcart,
]