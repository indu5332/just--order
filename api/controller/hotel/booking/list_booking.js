const bookingModel=require('../../../models/booking');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const config=require('config');

let findBooking=(req,res,next)=>{
console.log(req.decoded._id);
    let conditions=[
        {
        "$match":{
            hotelId:mongoose.Types.ObjectId(req.decoded._id)
        },
    },
    {
        $sort:{
            "created": -1
        }
    }
];
    bookingModel.aggregate(conditions,(error,booking)=>{        
        if(error){
            return res.json({success:false,isError:true,error:error});
        }
        else{
            return res.json({success:true,message:"List of booking",booking:booking});
        }
    }); 
    
}

module.exports=[
    findBooking
];