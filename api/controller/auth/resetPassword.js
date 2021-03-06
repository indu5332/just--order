const mongoose = require("mongoose");
let userModel = require("../../models/user");
const utility = require("../../utility/utility");

const findUserByToken = async (req, res, next) => {
  try {
    const conditions = {
      _id: mongoose.Types.ObjectId(req.body.userId),
    };
    const user = await userModel.find(conditions);
    if (user.length > 0) {
      req.data = {};
      req.data.user = user[0];
      next();
    } else {
      return res.status(404).json({ status: false, message: "Invalid token" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      isError: true,
      error: error,
    });
  }
};

const generateHashPassword = async (req, res, next) => {
  try {
    await utility.hash(req.body.password, (err, hashPassword) => {
      if (err) {
        console.log(err)
        return res.status(500).json({
          success: false,
          isError: true,
          error: err.message,
        });
      }
      req.data = {};
      req.data.hashPassword = hashPassword;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      isError: true,
      error: "error",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const updateResult = await userModel.updateOne(
      { _id: mongoose.Types.ObjectId(req.body.userId) },
      {
        $set: {
          verificationOtp: null,
          Duration: null,
          password: req.data.hashPassword,
        },
      }
    );
    if (updateResult) {
      return res
        .status(200)
        .json({
          success: true,
          message: "Password changed successfully",
          user: req.data.user,
        });
    }
    if (!updateResult) {
      return res.status(500).json({
        success: true,
        message: "Fail to reset password !",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, isError: true, error: error.message });
  }
};

module.exports = [findUserByToken, generateHashPassword, updateUser];
