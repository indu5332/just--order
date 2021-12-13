const mongoose = require("mongoose");
const userModel = require("../../models/user");

const verifyToken = async (req, res) => {
  try {
    const user = await userModel.findOne(
      {
        verificationOtp: req.body.Otp,
        Duration: { $gt: Date.now() },
        _id: mongoose.Types.ObjectId(req.body.userId),
      },
    );
    if (user) {
      return res.status(200).json({
        success: true,
        message: "User verified successfully"
      });
    }
    return res.status(404).json({
      success: true,
      message: "Invalid token detected",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      isError: true,
      error: error.message,
    });
  }
};

module.exports = [
  verifyToken,
];