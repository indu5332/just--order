const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const hotelModel = require('../../../models/restaurant');
const config = require('config'); // get our config file
const utility = require('../../../utility/utility');

let login = async(req, res, next) => {
    hotelModel.findOne({
        email: req.body.email
    }, (err, user) => {
        console.log(err);
        console.log(user);
        if (err) {
            return res.json({ success: false, isError: true, error: err });
        } else if (!user) {
            return res.json({ success: false, message: 'no restaurant exists' });
        } else if (user) {
            req.data = {};
            req.data.user = JSON.parse(JSON.stringify(user));
            next();
        }
    });
};

let comparePassword = (req, res, next) => {
    utility.checkHashPassword(req.body.password, req.data.user.password, 
        (err, isMatch) => {
        if (err) {
            return res.json({ success: false, isError: true, error: err });
        } else {
            if (isMatch) {
                next();
            } else {
                return res.json({ success: false, isError: true, message: 'You have enterd wrong email or password.'});
            }
        }
    });
};

let generateToken = (req, res) => {
    const payload = {
        email: req.data.user.email,
        _id: req.data.user._id,
        id: req.data.user.id,
        role:'restaurant',
        isAdmin:req.data.user.isAdmin
    };
    console.log(payload);
    const token = jwt.sign(payload, config.secret, {
        expiresIn: config.tokenDuration // expires in 24 hours
    });

    delete req.data.user.password;  
    // return the information including token as JSON
    res.json({
        success: true,
        message: 'You are logged in successfully.',
        token: token,
        user: req.data.user
    });

};

module.exports = [
    login,
    comparePassword,
    generateToken
];