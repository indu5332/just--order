const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let menuoptionSchema=new Schema({
        id:{type:Number},
        heading:{type:String},
        multiple:{type:Boolean,default:true},
        restaurantId:{type:Schema.Types.ObjectId,ref:'restaurant'},
        menuId:{type:Schema.Types.ObjectId,ref:'menu'},
        isSize:{type:Boolean,default:false},
        name:{type:String},
        price:{type:Number},
        ingrediants:{type:String},
        optionNumber: { type: Number},

},{timestamps:true})

menuoptionSchema.plugin(AutoIncrement, { inc_field: 'id', id: "menuoptionId" });
module.exports=mongoose.model('menuOption', menuoptionSchema);