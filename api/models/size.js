const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let sizeSchema=new Schema({
    id:{type:Number},
    menuId:{type:Schema.Types.ObjectId,ref:'menu'},
    restaurantId:{type:Schema.Types.ObjectId,ref:'restaurant'},
    title:{type:String},
    price: { type: Number}
});

sizeSchema.plugin(AutoIncrement, { inc_field: 'id', id: "sizeId" });
module.exports=mongoose.model('size', sizeSchema);