let ordersModel=require('../../../models/order');
let mongoose=require('mongoose');

let getorderDetail = (req, res,next) => {   
    ordersModel.findById(
        {_id:req.params.orderId},
        (err, orderDetail) => {
            if (err) {
                console.log(err);
                return res.json({ success: false, isError: true, error: err });
            } else {              
                if (orderDetail!=null) { 
                    console.log(orderDetail);                  
                    return res.json({ success: true, orderDetail:orderDetail });
                } else {
                    return res.json({ success: false, message: "No order exists for the given order Id." });
                }
            }
        });
};
module.exports =[getorderDetail];