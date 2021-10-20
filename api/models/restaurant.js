const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

const restaurantSchema=new Schema({
    id:{type:Number},
    //isAdmin:{type:Boolean,default:false},
    name:{type:String},
    description:{type:String},
    image:{type:String,default:'default.jpg'},
    city:{type:String},
    country:{type:String},
    code:{type:String},
    address:{type:String},
    region:{type:String},
    email:{type:String},
    password:{type:String},
    collectStatus:{type:Boolean,default:true},
    deliveryStatus:{type:Boolean,default:true},
    acceptCardStatus:{type:Boolean,default:true},
    isActive:{type:Boolean,default:true},
    status:{type:Boolean,default:true},
    deliveryCharge:{type:Number,default:0},
    serviceCharge:{type:Number,default:0},
    orderLimit:{type:Number,default:0},
    appColor:{type:String},
    webColor:{type:String},
    status: { type: Boolean, default: true },
    collectStatus:{type:Boolean,default:true},
    deliveryStatus:{type:Boolean,default:true},
    coupons:[
        {
            code:{type:String},
            discount:{type:Number,default:0}
        }
    ],
    timing:[
        {
            to:{type:String},
            from:{type:String},
            dayOff:{type:Boolean,default:true},
            day:{type:String},
            timingType:{type:String}
        }
    ],
    postcodes:[
        {
            code:{type:String},
            charge:{type:Number,default:0}
        }
    ],
    addedBy:{type:Schema.Types.ObjectId,ref:'user'}
},{timestamps:true});

restaurantSchema.plugin(AutoIncrement, { inc_field: 'id', id: "restaurantId" });
module.exports=mongoose.model('restaurant', restaurantSchema);