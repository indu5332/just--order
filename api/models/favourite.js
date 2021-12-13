const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

const favouriteSchema = new Schema(
  {
    id: { type: Number },
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    favourite:{type:Boolean},
    hotelId:{type: Schema.Types.ObjectId, ref: 'hotel'}
  },
  { timestamps: true },
);
favouriteSchema.plugin(AutoIncrement, { inc_field: 'id', id: "favouriteId" });
module.exports=mongoose.model('favourite', favouriteSchema);