const restaurantModel = require("../../../models/option");
const mongoose = require("mongoose");

let pullOpt = async (req, res) => {
  let conditions = {
    _id: mongoose.Types.ObjectId(req.body.optionId),
  };
  let dataToUpdate = {
    $pull: {
      opt: {
        _id: mongoose.Types.ObjectId(req.body.optId),
      },
    },
  };
  try {
    let updateRes = await restaurantModel.updateOne(conditions, dataToUpdate);
    if (updateRes.modifiedCount >0) {
      return res.status(200).json({
        success: true,
        message: "option removed successfully",
        updateRes: updateRes,
      });
    } else {
      console.log(res)
      return res.status(500).json({
        success: false,
        message: "fail to remove option"
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

module.exports = [pullOpt];