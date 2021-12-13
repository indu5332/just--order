const menuModel = require("../../../../models/menu");
const mongoose = require("mongoose");

let pullOptionFromMenu = async (req, res, next) => {
  try {
    const condition = {
      _id: mongoose.Types.ObjectId(req.body.menuId),
    };
    const dataToUpdate = {
      $pull: {
        options: {
          optionId: mongoose.Types.ObjectId(req.body.optionId),
        },
      },
    };
    const updateRes = await menuModel.updateOne(condition, dataToUpdate);
    if (updateRes.modifiedCount > 0) {
      return res.status(200).json({
        success: true,
        message: "Option removed successfully",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "fail to remove option",
        updateRes: updateRes,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = [pullOptionFromMenu];
