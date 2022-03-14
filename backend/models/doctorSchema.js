const mongoose = require("mongoose");
// const AutoIncrement = require('mongoose-sequence')(mongoose);
const doctorSchema = new mongoose.Schema({
  _id: { type: Number, required: false },
  name: { type: String, required: false, max: 20 },
  phone: { type: String, required: false },
  spec: { type: String, required: false },
  image: { type: String, required: false },
  age: { type: String, required: false },
  // rating: { type: Number, required: true },
});

// schema.plugin(AutoIncrement,{id:"doctor_id"});
module.exports = mongoose.model("doctor", doctorSchema);
