const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

const cartSchema = new Schema(
  {
    id: { type: Number },
    userId: { type: Schema.Types.ObjectId, ref: 'user' ,required:true},
    restaurantId: { type: Schema.Types.ObjectId, ref: 'resturant',required:true},
    cartItems:[{
      menuId:{type:Schema.Types.ObjectId,ref:'menu'},
      name:{type:String},
      size:{type:String},
      price: { type: Number },
      quantity: { type: Number },
    }],
  },
  { timestamps: true },
);
cartSchema.plugin(AutoIncrement, { inc_field: 'id', id: "cartId" });
module.exports=mongoose.model('cart', cartSchema);