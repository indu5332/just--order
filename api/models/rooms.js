const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let roomSchema=new Schema({
    id: { type: Number },
    hotel:{type:Schema.Types.ObjectId},  
    single:{
        kid:{type:Number,default:0},
        adults:{type:Number,default:0},
        image:{type:String,default:'default.png'},
        Price:{type:Number,default:400}
    }, 
    double:{
        kid:{type:Number,default:0},
        adults:{type:Number,default:0},
        image:{type:String,default:'default.png'},
        Price:{type:Number,default:500}
    },
    duplex:{
        kid:{type:Number,default:0},
        adults:{type:Number,default:0},
        image:{type:String,default:'default.png'},
        Price:{type:Number,default:600}
    },
    deluxe:{
        kid:{type:Number,default:0},
        adults:{type:Number,default:0},
        image:{type:String,default:'default.png'},
        Price:{type:Number,default:800}
    },      
},{timestamps:true});

roomSchema.plugin(AutoIncrement, { inc_field: 'id', id: "roomId" });
module.exports=mongoose.model('room', roomSchema);