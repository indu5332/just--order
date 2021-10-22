const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let optionSchema=new Schema({
    id:{type:Number},
    heading:{type:String},
    multiple:{type:Boolean,default:false},
    option:[
        {   
            name:{type:String},
            description:{type:String},
            price: { type: Number },
            optionNumber: { type: Number},
            otherLangTitle: { type: String },
        }
    ]
},{timestamps:true});

optionSchema.plugin(AutoIncrement, { inc_field: 'id', id: "optionId" });
module.exports=mongoose.model('option', optionSchema);