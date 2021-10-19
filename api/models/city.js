const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let citySchema=new Schema({
    id: { type: Number },
    cityname:{ type: String},
    region:{type: String},     
    country:{type: String}  
},{timestamps:true});

citySchema.plugin(AutoIncrement, { inc_field: 'id', id: "cityId" });
module.exports=mongoose.model('cities', citySchema);