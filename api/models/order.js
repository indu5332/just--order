const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let orderSchema=new Schema({
    id:{type:Number},
    restaurantId:{type:Schema.Types.ObjectId,ref:'restaurant'},
    menuId:{type:Schema.Types.ObjectId,ref:'menu'},
    userId: {type: Schema.Types.ObjectId,ref: 'authorization',required: true},
    status:{type:Boolean,default:true},
    orderNumber:{type:Number},
    price:{type:Number},
    quantity:{type:Number,default:1},
    transiction_details:{},
    shipping_address:{}
},{timestamps:true});
  
orderSchema.plugin(AutoIncrement, { inc_field: 'id', id: "orderId" });
module.exports=mongoose.model('order', orderSchema);