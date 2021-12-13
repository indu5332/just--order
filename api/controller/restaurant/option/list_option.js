const optionModel = require("../../../models/option");
const mongoose = require("mongoose");

let listoption = async (req, res, next) => {
  try {
    let condition = [
      {
        $match: {
          menuId: mongoose.Types.ObjectId(req.params.menuId),
        },
      },
    ];
    let options = await optionModel.aggregate(condition);
    return res.status(200).json({
      success: true,
      message: "option List",
      options: options,
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

module.exports = [listoption];
