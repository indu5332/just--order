const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let addressSchema = new Schema({
    id: { type: Number },
    country: { type: String},
    city: { type: String },
    address:{type:String},
    postcode:{type:String},
    userId:{type:mongoose.Types.ObjectId,ref:'user'}
},{timestamps:true});


addressSchema.plugin(AutoIncrement, { inc_field: 'id', id: "addressId" });
module.exports = mongoose.model('address', addressSchema);
