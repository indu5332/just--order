const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let roomSchema=new Schema({
    id: { type: Number },
    hotelId:{type:Schema.Types.ObjectId}, 
    type:
        {
        roomType:{type:String},
        kid:{type:Number,default:0},
        adults:{type:Number,default:0},
        image:{type:String,default:'default.png'},
        Price:{type:Number,default:400}
       },
},{timestamps:true});

roomSchema.plugin(AutoIncrement, { inc_field: 'id', id: "roomId" });
module.exports=mongoose.model('room', roomSchema);