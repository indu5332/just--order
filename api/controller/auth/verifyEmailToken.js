const mongoose = require('mongoose');
let userModel = require('../../models/user');
const utility = require('../../utility/utility');

const findUserByToken = async (req, res, next) => {
  try {
    const conditions = {
      verificationOtp: req.body.resetToken,
      Duration: { $gt: Date.now() },
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
    return res.status(500).json({ success: false, isError: true, error: error.message });
  }
};

let generateHashPassword = (req, res, next) => {

  utility.hash(req.body.newPassword, (err, hashPassword) => {
      if (err) {
          return res.json({ success: false, isError: true, error: err });
      } else {
          req.data = {};
          req.data.hashPassword = hashPassword;
          next();
      }
  });
};

const updateUser = async (req, res) => {
  try {
    const updateResult = await userModel.updateOne(
      { _id: mongoose.Types.ObjectId(req.decoded._id) },
      { $set: { verificationOtp: null, Duration: null, password:req.data.hashPassword } },
    );
    if (updateResult) {
      return res.status(200).json({ success: true, message: "Email verified" });
    }
    if (!updateResult) {
      return res.status(500).json({ success: true, message: "Fail to verify email.Please try again !" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, isError: true, error: error.message });
  }
};

module.exports = [
  findUserByToken,
  generateHashPassword,
  updateUser,
];