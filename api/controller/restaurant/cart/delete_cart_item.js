const cartModel = require("../../../models/cart");
const mongoose = require("mongoose");

let deletecartItem = async (req, res, next) => {
  let conditions = {
    _id: mongoose.Types.ObjectId(req.body.cartId),
  };
  let dataToUpdate = {
    $pull: {
      cartItems: {
        _id: mongoose.Types.ObjectId(req.body.cartItemsId),
      },
    },
  };
  try {
    let updateRes = await cartModel.updateOne(conditions, dataToUpdate);
    if (updateRes.modifiedCount == 1) {
      return res.status(200).json({
        success: true,
        message: "cart removed successfully",
        updateRes: updateRes,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "fail to remove cart",
        updateRes: updateRes,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      isError: true,
      error: error,
    });
  }
};

module.exports = [deletecartItem];
