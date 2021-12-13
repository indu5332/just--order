const mongoose = require("mongoose");
const cartModel = require("../../../models/cart");

let updatecart = async (req, res, next) => {
  try {
    let updateRes = await cartModel.updateOne({_id:mongoose.Types.ObjectId(req.params.cartId),
      "cartItems._id":mongoose.Types.ObjectId(req.body.cartItemsId)}, {
      $set:{
        "cartItems.$.quantity":req.body.quantity,
      }
    },{new:true});
    if (updateRes) {
      return res.status(200).json({
        success: true,
        message:"message",
        updateRes:updateRes
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "can't update",
        updateRes: updateRes,
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = [updatecart];