const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let reviewSchema=new Schema({
    id:{type:Number},
    modelid:{type:Schema.Types.ObjectId,req:true}, //this can be hotelId or restuarantId in params
    review: { type: String },
    ratings: { type: Number },
    Date: { type: Date },
    image: { type: String, default: 'profile.png' }, 
    addedBy: { type: Schema.Types.ObjectId, required: true, ref: 'authorization' }, 
},{timestamps:true});

reviewSchema.plugin(AutoIncrement, { inc_field: 'id', id: "reviewId" });
module.exports=mongoose.model('review', reviewSchema);