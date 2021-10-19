const userModel= require('../../models/user');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('config'); // get our config file
const utility = require('../../utility/utility');
const mongoose = require('mongoose');

const findUser=async (req, res, next) => {
   try {
    const user=await userModel.find({email: req.decoded.email});
    if(user.length===0){
        return res.status(404).json({success: false,message: 'No user found'})
    }
    req.data={}
    req.data.user=user[0]
    next();
   } catch (error) {
       return res.status(500).json({success: false,message:error.message});
   }
}

let comparePassword = (req, res, next) => {
    utility.checkHashPassword(req.body.oldPassword, req.data.user.password, 
        (err, isMatch) => {
        if (err) {
            return res.json({ success: false, isError: true, error: err });
        } else {
            if (isMatch) {
                next();
            } else {
                return res.json({ success: false, isError: true, message: 'You have enterd wrong  password.'});
            }
        }
    });
};

let genrateHashPassword = (req, res, next) => {

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

const changePassword=async (req, res,next) => {
    try {
        console.log(req.data.hashPassword)
        const updateResult = await userModel.updateOne(
            {_id:mongoose.Types.ObjectId(req.decoded._id)},
            {$set:{password:req.data.hashPassword}})
        if(updateResult.modifiedCount>0){
            return res.status(200).json({success:true, message:"updated!"})
        }
        else {
            return res.status(500).json({success:false, message:"error"})
        }
    } catch (error) {
        return res.status(500).json({success: false,message:error.message});
    }
}

module.exports = [
    findUser,
    comparePassword,
    genrateHashPassword,
    changePassword
]