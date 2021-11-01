const mongoose = require("mongoose");

const { Schema } = mongoose;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const notificationSchema = new Schema({
  id: { type: Number },
  to: {},
  title: { type: String },
  body: { type: String },
  payload: {},
  linkTo: { type: String },
  type: { type: String, default: "user" },
  seen: { type: Boolean, default: false },
},
{
  timestamps: true,
});

notificationSchema.plugin(AutoIncrement, { inc_field: "id", id: "notificationId" });
module.exports = mongoose.model("notification", notificationSchema);