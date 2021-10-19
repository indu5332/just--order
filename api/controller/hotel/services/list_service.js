const serviceModel=require('../../../models/services');
const mongoose = require('mongoose');



let findService=(req,res,next)=>{
    let conditions=[
        {
        $match:{
           hotelid:mongoose.Types.ObjectId(req.decoded._id)
        },
    },
    {
        $sort:{
            created: -1
        }
    }
];
console.log(conditions);
serviceModel.aggregate(conditions,(error,booking)=>{        
        if(error){
            return res.json({success:false,isError:true,message:error});
        }
        else{
            return res.json({success:true,message:"List of services",services:booking});
        }
    }); 
 
};

module.exports=[findService];