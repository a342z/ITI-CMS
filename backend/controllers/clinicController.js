const { validationResult } = require("express-validator");

const Clinic = require("./../models/clinicSchema");




exports.addClinic = async (request, response, next) => {
    try {
      let errors = validationResult(request);
      if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors
          .array()
          .reduce((current, object) => current + object.msg + " ", "");
        throw error;
      }
  





      let object = new Clinic({
        name: request.body.name,
        address: request.body.address,
        doctor : request.body.doctor
        
      });
      object
        .save()
        .then((data) => {
          response.status(201).json({ message: "added clinic successfully", data });
        })
        .catch((error) => next(error));


 

  
      // console.log(product_obj);
    } catch (error) {
      next(error);
    }
  };

// populate('author', 'name'). // only return the Persons name
  
  exports.getAllClinics = async (request, response, next) => {

    try {
        const data = await Clinic.find().populate('doctor','name')
        if (!data) {
            next()
        }
        response.status(200).json({ data })
    } catch (error) {
        next(error)
    }
  };
  


  exports.getClinic = async (request, response, next) => {
    try {
        const id = request.params.id;

        const data = await Clinic.findById(id).populate('doctor', 'name')
        if (!data) {
            next()
        }
        response.status(200).json({ data })
    } catch (error) {
        next(error)
    }
}

  


exports.updateClinic = async (request, response, next) => {
    try {
        const clinic = await Clinic.findOne({ _id: request.params.id });
        if (!clinic) generateError(403, "User not found")


        let object = new Clinic({
            name: request.body.name,
            address: request.body.address,
            doctor : request.body.doctor
            
          });

          object
          .save()
          .then((data) => {
            response.status(201).json({ message: "updated clinic successfully", data });
          })
          .catch((error) => next(error));

    } catch (error) {
        next(error)
    }
}
exports.deleteClinic = async (request, response, next) => {
    try {
        if (!ObjectId.isValid(request.params.id)) next();
        const clinic = await Clinic.findOne({ _id: req.params.id });
        if (!clinic) next();
        await speaker.delete();
        response.status(200).json({ data: `clinic deleted ` })
    } catch (error) {
        next(error)
    }
}//delete clinic by admin
