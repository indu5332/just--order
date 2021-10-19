const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let bookingSchema=new Schema({
    id: { type: Number },
    name:{type:String},
    description:{type:String},
    checkin:{type:String},
    checkout:{type:String},
    hotelid:{type:Schema.Types.ObjectId,ref:'hotel'},
    roomtype:{type:String},
    serviceId:{type:Schema.Types.ObjectId,ref:'service'},
   
},{timestamps:true});
bookingSchema.plugin(AutoIncrement, { inc_field: 'id', id: "bookingId" });
module.exports=mongoose.model('bookings', bookingSchema);
