const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let country=new Schema({
    countryname:{type:String},   
},{timestamps:true});

module.exports=mongoose.model('country',country);