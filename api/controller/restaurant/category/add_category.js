const categorySchema = require("../../../models/category");

let addCategory = async (req, res, next) => {
  try {
    const cat = {
      ...req.body,
      restaurantId: req.decoded._id,
    };
    const addCategory = await categorySchema.create(cat);
    if (addCategory) {
      return res.status(200).json({
        success: true,
        message: "Added category",
        category: addCategory,
      });
    } else {
      return res
        .status(500)
        .json({ message: "Fail to add category", success: false });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = [addCategory];