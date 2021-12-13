const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let otherSchema=new Schema({
    id:{type:Number},
    name:{type:String},
    otherItemId:{type:Schema.Types.ObjectId},
    city:{type:String},
    country:{type:String},
    staus:{type:String},
    region:{type:String},
    code:{type:String},
    addedBy:{type:Schema.Types.ObjectId}
},{timestamps:true});

otherSchema.plugin(AutoIncrement, { inc_field: 'id', id: "otherId" });
module.exports=mongoose.model('other', otherSchema);