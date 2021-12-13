const mongoose = require("mongoose");
const categorySchema = require("../../../models/category");

let deleteCategory = async (req, res, next) => {
  try {
    const deleteCategory = await categorySchema.deleteOne({
      _id: mongoose.Types.ObjectId(req.params.id),
    });
    if (deleteCategory.deletedCount > 0) {
      return res
        .status(200)
        .json({ success: true, message: "category deleted successfully" });
    } else {
      return res
        .status(500)
        .json({ message: "Failed to delete category", success: false });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = [deleteCategory];