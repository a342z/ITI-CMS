const { validationResult } = require("express-validator");
<<<<<<< HEAD
// import { Prescription } from "src/app/_models/prescription";

const prescription = require("./../models/preSchema.js");

exports.allPrescr = async (request, response, next) => {
  try {
    const data = await prescription.find({});
    console.log(data);
    if (!data) {
      next();
    }
    response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
exports.getOnePrescr = async (request, response, next) => {
  // Prescription.counterReset("_id", function (err) {
  //   console.log(err);
  // });
  try {
    const id = request.params.id;

    const data = await prescription
      .find({})
      .populate("doctor", "name")
      .populate("patient", "name")
      .populate("medicine", " medical_name");

    if (!data) {
      next();
    }
    response.status(200).json(data);
  } catch (error) {
    next(error);
  }
=======
const prescription = require("./../models/preSchema.js");
exports.allPrescr = (request, respone, next) => {
  prescription
    .find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => {
      next(error);
    });
>>>>>>> main
};

exports.addPrescr = (request, response, next) => {
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
    let error = new Error();
    error.status = 422;
    error.message = errors.array().reduce((current, object) => {
      current + object.msg + " ", "";
    });
    throw error;
  }
  let prescObject = new prescription({
<<<<<<< HEAD
    _id: request.body.id,
    doctor: request.body.doctor,
    patient: request.body.patient,
    medicine: request.body.medicine,
    date: request.body.date,
  });
  prescObject
    .save()
    .then((data) => {
      response.status(201).json({ message: "added", data });
    })
    .catch((error) => {
      next(error);
    });
=======
    doctorName: request.body.doctorName,
    patientName: request.body.patientName,
    medecineName: request.body.medecineName,
    purchaseDate: request.body.purchaseDate,
  });
  prescObject.save().then((data) => {
    response.status;
    (200).json;
    ({ data: "prescription Added", data }.catch((error) => next(error)));
  });
>>>>>>> main
};

exports.updatePrescr = (request, response, next) => {
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
    let error = new Error();
    error.status = 422;
    error.message = errors.array().reduce((current, object) => {
      current + object.msg + " ", "";
    });
    throw error;
  }
  prescription.findOne;
  ({ _id: request.params.id }
    .then((data) => {
      prescription.updateOne(
        {
          _id: data._id,
        },
        {
          $set: {
<<<<<<< HEAD
            doctor: request.body.doctor,
            patient: request.body.patient,
            medicine: request.body.medicine,
=======
            doctorName: request.body.doctorName,
            patientName: request.body.patientName,
            medecineName: request.body.patientName,
>>>>>>> main
          },
        }
      ).then;
      (data) => {
        response.status;
        (200).json;
        ({ messgae: "updated sucesfuly", data });
      };
    })
    .catch((error) => next(error)));
};

exports.deletePrescr = (request, response, next) => {
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
    let error = new Error();
    error.status = 422;
    error.message = errors.array().reduce((current, object) => {
      current + object.msg + " ", "";
    });
    throw error;
  }
  prescription
    .deleteOne({ _id: request.params.id })
    .then((data) => {
      if (data == null) {
        throw new Error("can't found prescription to delete");
      }
      response.status(200).json({ data: "prescription deleted", data });
    })
    .catch((error) => next(error));
};
