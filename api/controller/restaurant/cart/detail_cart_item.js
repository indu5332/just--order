let cartsModel=require('../../../models/cart');
let mongoose=require('mongoose');

let getcartDetail = (req, res,next) => {   
    console.log(req.params.cartId);
    cartsModel.findById(
        {_id:req.params.cartId},
        (err, cartDetail) => {
            if (err) {
                console.log(err);
                return res.json({ success: false, isError: true, error: err });
            } else {              
                if (cartDetail!=null) { 
                    console.log(cartDetail);                  
                    req.data.carts=JSON.parse(JSON.stringify(cartDetail));
                    next();
                } else {
                    return res.json({ success: false, message: "No cart exists for the given cart Id." });
                }
            }
        });
};
module.exports =[getcartDetail];