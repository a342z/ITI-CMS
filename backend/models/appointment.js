const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const appointmentSchema = new mongoose.Schema(
  {
    _id: Number,
    doctorId: Number,
    patientId: Number,
    time:Date,
    status:String //enum
    //doctorname
    //doctorid

  },
  { timestamps: true }
);

appointmentSchema.plugin(AutoIncrement, { id: "appointment_id" });
module.exports = mongoose.model("appointment", appointmentSchema);
