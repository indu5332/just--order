const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

const cartSchema = new Schema(
  {
    resturantId: { type: Schema.Types.ObjectId, ref: 'resturant', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    price: { type: Number },
    quantity: { type: Number },
    shippingAddress: {
      city: { type: String },
      country: { type: String },
      address: { type: String },
      zipcode: { type: String },
    },
  },
  { timestamps: true },
);
cartSchema.plugin(AutoIncrement, { inc_field: 'id', id: "cartId" });
module.exports=mongoose.model('cart', cartSchema);