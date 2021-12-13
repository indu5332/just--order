const menuModel = require("../../../../models/menu");
const mongoose = require("mongoose");

let optionListOfMenu = async (req, res, next) => {
  try {
    const conditions = [
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.params.menuId),
          restaurantId: mongoose.Types.ObjectId(req.decoded._id),
        },
      },
      {
        $unwind: {
          path: "$options",
        },
      },
      {
        $replaceRoot: {
          newRoot: "$options",
        },
      },
      {
        $lookup: {
          from: "menuoptions",
          localField: "optionId",
          foreignField: "_id",
          as: "opti",
        },
      },
      {
        $unwind: {
          path: "$opti",
        },
      },
      {
        $replaceRoot: {
          newRoot: "$opti",
        },
      },
    ];
    const menuOptions = await menuModel.aggregate(conditions);
    console.log(menuOptions);
    return res.status(200).json({
      success: true,
      message: "Option List",
      options: menuOptions,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = [optionListOfMenu];
