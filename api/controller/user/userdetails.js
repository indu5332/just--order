let customerModel = require('../../models/user');
const config = require('config'); // get our config file
let mongoose = require('mongoose');

let getUserDetail = (req, res,next) => {
    let conditions = [{
        '$match': {
            "_id": mongoose.Types.ObjectId(req.decoded._id),
        }
    }, 
    ]
    customerModel.aggregate(
        conditions,
        (err, userDetail) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ success: false, isError: true, error: err });
            } else {
                if (userDetail.length > 0) {
                    userDetail[0].password = 0;
                    req.data={};
                    req.data.user= JSON.parse(JSON.stringify(userDetail[0]));
                    next();
                } else {
                    return res.status(404).json({ success: false, message: "No user exists for the given user Id." });
                }
            }
    });
};

let addImage=async(req, res, next)=>{
    req.data.user.image=await userImage(req.data.user.image);
    return res.status(200).json({ success: true, message: "Details of the given user as per the user Id.", user: req.data.user });
}

async function userImage(image){
    if(image==='profile.png'){
        return config.fileUrl+'/profile.png';
    }
    else {
        return; 
    }
}
module.exports = [getUserDetail,addImage];
