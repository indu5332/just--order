const resetaurantSchema= require('../../models/restaurant');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('config'); // get our config file
const utility = require('../../utility/utility');

let checkEmailExist=async(req,res,next)=>{
    try {
        
        const isEmail=await resetaurantSchema.find({email:req.body.email});
        if(isEmail.length>0){
            return res.status(306).json({
                success: false,
                message:'Email already exists'
            });
        }
        else {
            next();
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            isError:true,
            error:error.message
        })
    }
}

let genrateHashPassword = (req, res, next) => {
    utility.hash(req.body.password, (err, hashPassword) => {
        if (err) {
            console.log(err);
            return res.json({ success: false, isError: true, error: err });
        } else {
            req.data={};
            req.data.password = hashPassword;
            next();
        }
    });
};

let addRestaurant=async(req,res,next) => {
    try{
        const restaurant=req.body;
        delete restaurant.password;
        let data={...restaurant,addedBy:req.decoded._id,password:req.data.password}
        const addRes=await resetaurantSchema.create(data);
        if(addRes){
            return res.status(200).json({ 
                success: true,message:"Restaurant added successfully",resturant:addRes
            });
        }
        else {
            return res.status(500).json({
                success: false,message:"fail to add restaurant"
            })
        }
    }
    catch(err){
        return res.status(500).json({
            success:false,
            isError:true,
            error:error.message
        })
    }
}

module.exports=[
    checkEmailExist,
    genrateHashPassword,
    addRestaurant
]