const mongoose=require('mongoose');
const hotelModel=require("../../models/hotel");
const config=require('config');
const rooms = require('../../models/rooms');


let getHotelDetails=async (request,response)=>{
     try {
        const hotelList=await hotelModel.find({})
        await Promise.all(hotelList.map(async hotel=>{
            hotel.hotel.image=config.fileUrl+"/hotel/"+hotel.hotel.image
            console.log(hotelList)
        }))
        console.log(hotelList)
        return response.json({ success: true, message: "List of hotels", hotels: hotelList ,rooms:rooms});
     } catch (error) {
        return response.json({ success: false, isError: true, error: "error" });
     }
};

module.exports=[getHotelDetails];