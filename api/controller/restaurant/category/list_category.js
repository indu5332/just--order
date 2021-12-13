const mongoose = require("mongoose");
const categorySchema = require("../../../models/category");
const config = require("config");

let listCategory = async (req, res, next) => {
  try {
    const allCategories = await categorySchema.find({
      restaurantId: mongoose.Types.ObjectId(req.params.restaurantId),
    });
    await Promise.all(
      allCategories.map(async (Category) => {
        Category.image = config.fileUrl + "/" + Category.image;
        console.log(allCategories);
      })
    );
    return res.status(200).json({
      success: true,
      message: "Category List",
      categories: allCategories,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = [listCategory];