const mongoose = require('mongoose');
let userModel = require('../../models/user');
const mailService=require('./mail')

const findUser = async (req, res, next) => {
  try {
    const user = await userModel.find({email:req.decoded.email});
    if (user.length === 0) {
      return res.status(404).json({ success: false, message: "No user found with this email" });
    }
    req.data = {};
    req.data.user = user[0];
    next();
  } catch (error) {
    return res.status(500).json({ success: false, isError: true, error: error.message });
  }
};

const sendEmail = async (req, res) => {
  try {
    const verificationOtp = Math.floor((Math.random() * 999999) + 111111);
    const Duration = Date.now() + 3 * 24 * 60 * 60 * 1000;
    const data = {
      email: req.data.user.email,
      templateData: {
        verificationOtp: verificationOtp,
        subject:"reset password"
      },
    };
      await mailService.sendEmail(data);
      await userModel.updateOne(
        {_id:mongoose.Types.ObjectId(req.decoded._id)},
        {$set:{verificationOTp:verificationOtp,Duration:Duration}}
    )
    return res.status(200).json({success:true,message:"mail sent!"})
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      isError: true,
      error: error,
    });
  }
};

module.exports = [
  findUser,
  sendEmail
]