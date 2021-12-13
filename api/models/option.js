const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let optionSchema=new Schema({
    id:{type:Number},
    heading:{type:String},
    menuId:{type:Schema.Types.ObjectId,required:true,ref:'menu'},
    restaurantId:{type:Schema.Types.ObjectId,required:true,ref:'restaurant'},
    opt:[
        {  
            price:{type:Number},
            optionNumber: { type: Number},  
            type:{type:String}
        }
    ]
},{timestamps:true});

optionSchema.plugin(AutoIncrement, { inc_field: 'id', id: "optionId" });
module.exports=mongoose.model('option', optionSchema);