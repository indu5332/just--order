const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let hotelSchema=new Schema({
    id: { type: Number },
    isAdmin: {type:Boolean, default:false},
    hotel:{
        name: { type: String},       
        phone: { type:String},
        city: { type: String },
        country: { type: String},
        region: { type: String },
        image: {type:String,default:'default.jpg'},
        address:{type:String},
        description:{type:String},
        cityDistance:{type:String}, 
    },
    owner:{
        email: { type: String},
        phone: { type: String},
    },
    auth:{
        email: { type: String,lowercase:true},
        password: { type: String },
    },   
   service:{
       rating: { type: Number,default:0},
       status:{type:Boolean,default:true},
       parking:{type:Boolean,default:true},
       balcony:{type:Boolean,default:true},
       bed:{type:Boolean,default:true},
       breakfast:{type:Boolean,default:true}
   },
    addedBy:{type:mongoose.Types.ObjectId,ref:'user'},  
},{timestamps:true});

hotelSchema.plugin(AutoIncrement, { inc_field: 'id', id: "hotelId" });
module.exports=mongoose.model('hotel', hotelSchema);