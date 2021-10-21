const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let reviewSchema=new Schema({
    id:{type:Number},
    user: { type: Schema.Types.ObjectId, required: true, ref: 'authorization' },
    modelid:{type:Schema.Types.ObjectId,req:true},
    review: { type: String },
    ratings: { type: Number },
    Date: { type: Date },
    image: { type: String, default: 'profile.png' },  
},{timestamps:true});

reviewSchema.plugin(AutoIncrement, { inc_field: 'id', id: "reviewId" });
module.exports=mongoose.model('review', reviewSchema);