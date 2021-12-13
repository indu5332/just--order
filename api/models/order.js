const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let orderSchema=new Schema({
    id:{type:Number},
    restaurantId:{type:Schema.Types.ObjectId,ref:'restaurant'},
    orderDate:{type:Date},
    orderTime:{type:String},
    userId: {type: Schema.Types.ObjectId,ref: 'authorization',required: true},
    status:{type:String},
    orderNumber:{type:Number},
    totalPrice:{type:Number},
    transiction_details:{},
    shipping_address:{},
    cart:[],
},
{timestamps:true});
  
orderSchema.plugin(AutoIncrement, { inc_field: 'id', id: "orderId" });
module.exports=mongoose.model('order', orderSchema);