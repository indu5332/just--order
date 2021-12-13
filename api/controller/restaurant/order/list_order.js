const orderModel = require("../../../models/order");
const mongoose = require("mongoose");
const config = require("config");

let listorder = async (req, res, next) => {
  try {
    let condition = [
      {
        $match: {
          userId: mongoose.Types.ObjectId(req.decoded._id),
        },
      },
    ];
    let orders = await orderModel.aggregate(condition);
    return res.status(200).json({
      success: true,
      message: "order List",
      orders: orders,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      isError: true,
      error: error,
    });
  }
};

module.exports = [listorder];
