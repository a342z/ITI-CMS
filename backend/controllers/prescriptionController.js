const { validationResult } = require("express-validator");
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
            doctorName: request.body.doctorName,
            patientName: request.body.patientName,
            medecineName: request.body.patientName,
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
