const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let menuOptionSchema=new Schema({
        id:{type:Number},
        heading:{type:String},
        multiple:{type:Boolean},
        restaurantId:{type:Schema.Types.ObjectId,ref:'restaurant'},
        menuId:{type:Schema.Types.ObjectId,ref:'menu'},
        opt:[{
            description:{type:String},
            price:{type:Number},
            optionNumber:{type:Number},
            otherLangTitle:{type:String},
            name:{type:String}
        }]
    
},{timestamps:true})

menuOptionSchema.plugin(AutoIncrement, { inc_field: 'id', id: "menuOptionId" });
module.exports=mongoose.model('menuOption', menuOptionSchema);