const optionSchema = require("../../../models/option");
const mongoose = require("mongoose");

let addMenu = async (req, res, next) => {
  let conditions = {
    _id: mongoose.Types.ObjectId(req.body.optionId),
  };
  let dataToUpdate = {
    $push: {
      opt:{
        $each:req.body.opt
      }
    },
  };   
  try {
    let updateRes = await optionSchema.updateMany(conditions,dataToUpdate);
    if (updateRes.modifiedCount > 0) {
      return res.status(200).json({
        success: true,
        message: "option added successfully",
        updateRes: updateRes,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "fail to add option",
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

module.exports = [addMenu];
