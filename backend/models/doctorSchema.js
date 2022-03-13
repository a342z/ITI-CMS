const mongoose = require("mongoose");
// const AutoIncrement = require('mongoose-sequence')(mongoose);
const doctorSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true, max: 20, required: true },
  email: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  spec: { type: String, required: true },
  appointmentDate: { type: String, ref: "patient" },
  availability: { type: Boolean, default: false },
  image: { type: String, required: true },
  age: { type: String, required: true },
  isMarried: { type: Boolean, required: true },
  rating: { type: Number, required: true },
});

// schema.plugin(AutoIncrement,{id:"doctor_id"});
module.exports = mongoose.model("doctor", doctorSchema);
