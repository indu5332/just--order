let hotelModel = require('../../models/hotel');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('config'); // get our config file
const utility = require('../../utility/utility');
const rooms=require('../../models/rooms');


let checkHotelExist = (req, res, next) => {
    const body=JSON.parse(JSON.stringify(req.body));
    req.data={}
    let data={
        hotel:body.hotel,
        auth:body.auth,
        owner:body.owner,
        service:body.service,
        addedBy:req.decoded._id
    }
    req.data=data
    hotelModel.find(
        { 'auth.email': req.data.auth.email},
        (err, hotel) => {
            if (err) {
                return res.json({ success: false, isError: true, error: err });
            } else {
                if (hotel.length > 0) {
                    return res.json({ success: false, message: 'Email already exists. Choose another email.' });
                } else {
                    next();
                }
            }
        }
    );
};
let genrateHashPassword = (req, res, next) => {
    utility.hash(req.data.auth.password, (err, hashPassword) => {
        if (err) {
            console.log(err);
            return res.json({ success: false, isError: true, error: err });
        } else {
            req.data.auth.password = hashPassword;
            next();
        }
    });
};

let createHotel = (req, res, next) => { 
    const hotelData=req.data;
    console.log(hotelData)
    hotelModel.create(
        hotelData,
        (err, hotel) => {
            if (err) {
                console.log(err);
                return res.json({ success: false, isError: true, error: err });
            } else {
                req.data.createdUser = JSON.parse(JSON.stringify(hotel));
                next();
            }
        });
};
let generateToken = (req, res,next) => {
    const payload = {
        email: req.data.createdUser.auth.email,
        _id: req.data.createdUser._id,
        id: req.data.createdUser.id,
    };
    const token = jwt.sign(payload, config.secret, {
        expiresIn: config.tokenDuration // expires in 24 hours
    });

    delete req.data.createdUser.password;

    // return the information including token as JSON
    res.json({
        success: true,
        message: 'Hotel registered successfully.',
        token: token,
        user: req.data.createUser,
        rooms:req.data.rooms
    });

};

module.exports = [
    checkHotelExist,
    genrateHashPassword,
    createHotel,
    //createRoom,  
    generateToken
];