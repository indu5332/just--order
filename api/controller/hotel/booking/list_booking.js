const bookingModel=require('../../../models/booking');
const mongoose=require('mongoose');


let listBooking=async(req,res,next)=>{
    try {
        //console.log(req.decoded._id)
        let condition=[
            {
                $match:{
                    userId:mongoose.Types.ObjectId(req.decoded._id)
                }
            },
        ];
        let bookings=await bookingModel.aggregate(condition);
        
        if (bookings){
            return res.status(200).json({
                success:true,
                message:"booking List",
                bookings:bookings
            })
        }
        else{
            return res.status(404).json({
                success:true,
                message:"booking List",
                bookings:bookings
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            isError:true,
            error:error
        })
    }
}

module.exports=[
    listBooking
]