const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let userSchema = new Schema({
    id: { type: Number },
    password: { type: String },
    firstName: { type: String},
    lastName:{type:String},
    email: { type: String},
    mobile: { type: String },
    country: { type: String},
    city: { type: String },
    address:{type:String},
    postcode:{type:String},
    image: { type: String, default: 'profile.png' },  
    verificationOtp:{type:Number},
    Duration:{type:Date},
},{timestamps:true});


userSchema.plugin(AutoIncrement, { inc_field: 'id', id: "userId" });
module.exports = mongoose.model('user', userSchema);
