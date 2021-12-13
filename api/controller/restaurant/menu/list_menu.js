const menuModel = require("../../../models/menu");
const mongoose = require("mongoose");
const config = require("config");

let listMenu = async (req, res, next) => {
  try {
    let condition = [
      {
        $match: {
          restaurantId: mongoose.Types.ObjectId(req.params.restaurantId),
        },
      },
    ];
    let menus = await menuModel.aggregate(condition);
    await Promise.all(
      menus.map(async (menu) => {
        menu.imageUrl = config.fileUrl + "/menus/" + menu.imageUrl;
        console.log(menus);
      })
    );
    return res.status(200).json({
      success: true,
      message: "Menu List",
      menus: menus,
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

module.exports = [listMenu];
