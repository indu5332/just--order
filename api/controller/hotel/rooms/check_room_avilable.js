const roomModel=require("../../../models/rooms");
const serviceModel = require('../../../models/services');
const mongoose = require('mongoose');

let findTotalService=async(req,res,next)=>{
    const services = await serviceModel.find({hotelid:mongoose.Types.ObjectId(req.decoded._id),_id:mongoose.Types.ObjectId(req.params.serviceId)});
    return res.json({ success:true,services:services});
}


module.exports=[
    findTotalService,
]