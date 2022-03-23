const mongoose = require("mongoose");
<<<<<<< HEAD
// import { Prescription } from "src/app/_models/prescription";
=======
>>>>>>> main
const increment = require("mongoose-sequence")(mongoose);
const schema = new mongoose.Schema(
  {
    _id: Number,
<<<<<<< HEAD
    doctor: {
      type: Number,
      // required: true,
      ref: "doctor",
    },
    patient: {
      type: Number,
      // required: true,
      ref: "patient",
    },
    medicine: [
      {
        type: Number,
        ref: "medicine_schema",
      },
    ],
    date: {
=======
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
>>>>>>> main
      type: Date,
    },
  },

  { _id: false }
);

<<<<<<< HEAD


// schema.plugin(increment);

=======
>>>>>>> main
schema.plugin(increment, { id: "prescriptionIncrement", inc_field: "_id" });
module.exports = mongoose.model("prescription", schema);
