const mongoose = require("mongoose");
const increment = require("mongoose-sequence")(mongoose);
const schema = new mongoose.Schema(
  {
    _id: Number,
    doctorName: {
      type: String,
      required: true,
      ref: "doctors",
    },
    patientName: {
      type: String,
      required: true,
      ref: "patients",
    },
    medecineName: [
      {
        type: Number,
        ref: "medecine",
      },
    ],
    purchaseDate: {
      type: Date,
    },
  },

  { _id: false }
);

schema.plugin(increment, { id: "prescriptionIncrement", inc_field: "_id" });
module.exports = mongoose.model("prescription", schema);
