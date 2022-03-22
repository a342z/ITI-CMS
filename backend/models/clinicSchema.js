const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
isReq=false;
const schema = new mongoose.Schema({
  
  _id: Number,
    name:{ type:String,required:isReq},
    adress: {
      city: { type: String,required:isReq },
      street: { type: String,required:isReq },
      building: { type: String,required:isReq },
    },

    doctor: {
        type: Number,
        ref: "doctors",
        required:isReq
    },

})
schema.plugin(AutoIncrement, { id: "clinic_id" });
module.exports = mongoose.model("event", schema);
