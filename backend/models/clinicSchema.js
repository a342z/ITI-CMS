const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
<<<<<<< HEAD
isReq = true;
=======
isReq = false;
>>>>>>> main
const schema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: isReq },
  address: { type: String, required: isReq },

  doctor: {
    type: Number,
    ref: "doctor",
    required: isReq,
  },
});


schema.plugin(AutoIncrement, { id: "clinic_id" });
<<<<<<< HEAD
module.exports = mongoose.model("clinics", schema);
=======
module.exports = mongoose.model("clinics", schema);
>>>>>>> main
