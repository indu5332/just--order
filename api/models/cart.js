const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

const cartSchema = new Schema(
  {
    resturantId: { type: Schema.Types.ObjectId, ref: 'resturant', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    menuId:{type:Schema.Types.ObjectId,ref:'menu',required:true},
    name:{type:String},
    price: { type: Number },
    quantity: { type: Number },
  },
  { timestamps: true },
);
cartSchema.plugin(AutoIncrement, { inc_field: 'id', id: "cartId" });
module.exports=mongoose.model('cart', cartSchema);