const mongoose = require("mongoose");
const restaurantModel = require("../../../models/restaurant");

let addCharge = async (req, res, next) => {
  try {
    let conditions = {
      _id: mongoose.Types.ObjectId(req.body.restaurantId),
    };
    let dataToUpdate = {
      $set: req.body,
    };
    let updateRes = await restaurantModel.updateOne(conditions, dataToUpdate);
    if (updateRes.modifiedCount == 1) {
      return res.status(200).json({
        success: true,
        message: "Charges updated",
        result: updateRes,
      });
    } else {
      return res.status(500).json({
        success: true,
        message: "Fail to update Charges",
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

module.export = [addCharge];
