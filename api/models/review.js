const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let reviewSchema=new Schema({
    user: { type: Schema.Types.ObjectId, required: true, ref: 'authorization' },
    hotelId:{type:Schema.Types.ObjectId,required:true,ref:'hotel'},
    review: { type: String },
    ratings: { type: Number },
    Date: { type: Date },
    image: { type: String, default: 'profile.png' },  
},{timestamps:true});

reviewSchema.plugin(AutoIncrement, { inc_field: 'id', id: "reviewId" });
module.exports=mongoose.model('review', reviewSchema);