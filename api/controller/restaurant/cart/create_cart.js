const cartModel = require("../../../models/cart");
const mongoose = require("mongoose");
const restaurant = require("../../../models/restaurant");

let findCart = async (req, res, next) => {
  try {
    const cart = await cartModel.find({
      userId: mongoose.Types.ObjectId(req.decoded._id),
    });
    if (cart.length > 0) {
      let conditions = {
        _id: mongoose.Types.ObjectId(cart[0]._id),
      };
      let dataToUpdate = {
        $push: {
          cartItems: {
            menuId: req.body.menuId,
            name: req.body.name,
            quantity: req.body.quantity,
            size: req.body.size,
            price: req.body.price,
          },
        },
      };
      console.log(cart[0]);
      let updateRes = await cartModel.updateOne(conditions, dataToUpdate);
      if (updateRes.modifiedCount == 1) {
        return res.status(200).json({
          success: true,
          message: "updated",
          updateRes: updateRes,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "can't update",
          updateRes: updateRes,
        });
      }
    } else {
      next();
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

let addcart = async (req, res) => {
  try {
    const cart = {
      userId: mongoose.Types.ObjectId(req.decoded._id),
      restaurantId: req.body.restaurantId,
      cartItems: [],
    };
    const addcart = await cartModel.create(cart);
    if (addcart) {
      let conditions = {
        _id: mongoose.Types.ObjectId(addcart._id),
      };
      let dataToUpdate = {
        $push: {
          cartItems: {
            menuId: req.body.menuId,
            name: req.body.name,
            quantity: req.body.quantity,
            size: req.body.size,
            price: req.body.price,
          },
        },
      };
      let updateRes = await cartModel.updateOne(conditions, dataToUpdate);
      return res.status(200).json({
        success: true,
        message: "cart created",
        updateRes: updateRes,
      });
    } else {
      return res
        .status(500)
        .json({ message: "Fail to add cart", success: false });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = [findCart, addcart];