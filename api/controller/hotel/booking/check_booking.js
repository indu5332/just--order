let bookingModel=require('../../../models/booking');

let bookingDetail = (req, res,next) => {   
    bookingModel.findById(
        {_id:req.params.bookingId},
        (err, bookingDetail) => {
            if (err) {
                console.log(err);
                return res.json({ success: false, isError: true, error: err });
            } else {              
                if (bookingDetail!=null) { 
                    console.log(bookingDetail);                  
                    return res.json({ success: true, bookingDetail:bookingDetail });
                } else {
                    return res.json({ success: false, message: "No booking exists for the given booking Id." });
                }
            }
        });
};
module.exports =[bookingDetail];