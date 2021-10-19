const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let categorySchema=new Schema({
    id:{type:Number},    
    restaurantId:{type:Schema.Types.ObjectId,ref:'restaurant'},
    categoryName:{type:String}, 
    },
    {
        timestamps:true
    }
);

categorySchema.plugin(AutoIncrement, { inc_field: 'id', id: "categoryId" });
module.exports=mongoose.model('category', categorySchema);