const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let otherServiceSchema=new Schema({
    id:{type:Number},
    name:{type:String},

},{timestamps:true});

otherServiceSchema.plugin(AutoIncrement, { inc_field: 'id', id: "otherServiceId" });
module.exports=mongoose.model('otherservice', otherServiceSchema);