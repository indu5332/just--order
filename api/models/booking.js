const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let bookingSchema=new Schema({
    id: { type: Number },
    checkin:{type:String},
    checkout:{type:String},
    hotelId:{type:Schema.Types.ObjectId,ref:'hotel'},
    roomtype:{type:String},
    roomPrice:{type:Number},
    quantity:{type:Number},
    adults:{type:Number},
    status:{type:Boolean,default:false},
    shipping:{},
    children:{type:Number},
    discount:{type:Number},
    charges:{type:Number},
    userId:{type:Schema.Types.ObjectId,ref:'user'},
},{timestamps:true});
bookingSchema.plugin(AutoIncrement, { inc_field: 'id', id: "bookingId" });
module.exports=mongoose.model('bookings', bookingSchema);