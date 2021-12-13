const bookingModel=require('../../../models/booking');

let deleteBooking =async(req, res, next)=>{
    try {
        const deleteBooking=await bookingModel.deleteOne({_id:mongoose.Types.ObjectId(req.params.bookingId)})
        console.log(req.params.bookingId)
        if(deleteBooking.deletedCount>0){
            console.log("booking deleted")
            return res.status(200).json({success:true, message:'booking deleted successfully'})
        }
        else {
            return res.status(500).json({message:'Failed to delete booking',success: false});
        }
    } catch (error) {
        return res.status(500).json({message: error.message,success: false});
    }
}

module.exports=[
    deleteBooking
];