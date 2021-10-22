const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let menuSchema = new Schema({
    id: { type: Number },
    menuName:{type:String},
    restaurantId: { type: Schema.Types.ObjectId },
    categoryId: { type: Schema.Types.ObjectId },
    menuNo: { type: Number },
    description: { type: String },
    imageUrl: { type: String },
    isSize: { type: Boolean, default: false },
    discount: { type: Number },
    otherLangTitle: { type: String },
    price: { type: Number },
    repeat: { type: Number, default: 1 },
    title: { type: String },
    options:[
        {
            optionId: { type: Schema.Types.ObjectId,ref:'menuOption'}
        }
    ]
},
    {
        timestamps: true
    }
);

menuSchema.plugin(AutoIncrement, { inc_field: 'id', id: "menuId" });
module.exports = mongoose.model('menus', menuSchema);