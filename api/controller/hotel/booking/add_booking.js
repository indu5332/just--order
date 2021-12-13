const bookingModel=require('../../../models/booking');

let addBooking=async(req,res,next)=>{
    try {
        const BookingRes=await bookingModel.create({...req.body,userId:req.decoded._id});
        if(BookingRes){
            return res.status(200).json({
                success:true,
                message:"booking added successfully",
                booking:BookingRes
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            isError:true,
            message:error.message
        })
    }
}
module.exports=[
    addBooking
]