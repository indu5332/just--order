const mongoose = require("mongoose");
const cartModel=require("../../../models/cart");


let findcart =(request,response,next) => {
        cartModel.find({userId:mongoose.Types.ObjectId(request.decoded._id)},(error,cart) => {
        if (error) {
            console.log(error);
            return response.json({ success: false, isError: true, error: error });
        }
        else{
            if (cart!=null) {
                console.log(cart);                   
                next();
            } else {
                return response.json({ success: false, message: "No cart exists for the given cart Id." });
            }
        }
    });
};

let updatecart=(request,response,next)=>{
     cartModel.updateOne({_id:mongoose.Types.ObjectId(request.params.cartId)},{$set:request.body},(error,cart) => {
        if(error){
            console.log(error);
            console.log(cart);
            return response.json({ success: false, isError: true, error: error });
        }
        else{//JSON.parse(request.body[request.params.type])
            if(cart!=null){
                console.log(cart);
                return response.json({ success: true, message: "cart updated successfully", cart: cart });
            }
            else{
                return response.json({ success: false, message: "No cart exists for the given cartId." });
            }
        }
    });
};

module.exports=[
    findcart,
    updatecart
];