const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let orderSchema=new Schema({
    id:{type:Number},
    restaurantId:{type:Schema.Types.ObjectId,ref:'restaurant'},
    user: {type: Schema.Types.ObjectId,ref: 'authorization',required: true},
    status:{type:Boolean,degault:true},
    orderNumber:{type:Number},
    price:{type:Number},
    quantity:{type:Number,default:1},
    transaction_details:{},
    shipping_address:{}
},{timestamps:true});
  
orderSchema.plugin(AutoIncrement, { inc_field: 'id', id: "orderId" });
module.exports=mongoose.model('order', orderSchema);