const mongoose = require("mongoose");
const restaurantModel = require("../../../models/restaurant");

let removeCoupon = async (req, res, next) => {
  try {
    let conditions = {
      _id: mongoose.Types.ObjectId(req.decoded._id),
    };
    let dataToUpdate = {
      $pull: {
        coupons: {
          _id: mongoose.Types.ObjectId(req.params.couponId),
        },
      },
    };
    let updateRes = await restaurantModel.updateOne(conditions, dataToUpdate);
    if (updateRes.modifiedCount == 1) {
      return res.status(200).json({
        success: true,
        message: "Coupon removed",
        result: updateRes,
      });
    } else {
      return res.status(500).json({
        success: true,
        message: "Fail to remove Coupon",
        result: updateRes,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      isError: true,
      error: error,
    });
  }
};

module.exports = [removeCoupon];
