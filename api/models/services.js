const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let serviceSchema=new Schema({
    id:{type:Number},
    servicename:{type:String},
    rooms:{type:Number},
    status:{type:Boolean},
    oldprice:{type:Number},
    newprice:{type:Number},
    kids:{type:Number},
    adults:{type:Number},
    hotelid:{type:Schema.Types.ObjectId,ref:'hotel'},
},{timestamps:true});

serviceSchema.plugin(AutoIncrement, { inc_field: 'id', id: "serviceid" });
module.exports=mongoose.model('services', serviceSchema);