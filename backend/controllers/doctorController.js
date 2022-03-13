const { validationResult } = require("express-validator");
const Speaker = require("./../models/doctorSchema");
const bcrypt = require('bcrypt');

//get all doctors
exports.getAllDoctors = (request, response, next) => {


    // if (request.role == "admin" || request.role == "doctor") {
        Doctor.find({})
            .then(data => {
                response.status(200).json(data)
            })
            .catch(error => {
                next(error);
            })
    }
//     else {
//         throw new Error("Not Authorized. only doctor can do that");
//     }
// }

  //add doctor 
  exports.addDoctor = (request, response, next) => {

    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }

    // if (request.role == "admin" || request.role == "doctor") {

 bcrypt.hash(request.body.password, 10) 
    let doctorObj = new Speaker({
        // _id: request.body.id,
        name: request.body.name,
        email: request.body.email,
        image:"http://localhost:8080/images/"+ request.file.filename,
        password:hash,
        age: request.body.age,
        spec: request.body.spec,
        appointmentDate: request.body.appointmentDate,
        availability: request.body.availability,
        phone: request.body.phone,
        isMarried: request.body.isMarried,
        rating: request.body.rating
    })

    doctorObj.save()
        .then(data => {
            response.status(201).json({ message: "added", data })
        })
        .catch(error => next(error))


    }
//     else {
//         throw new Error("Not Authorized. only doctor can do that");
// }
// }

//update doctor information

exports.updateDoctor = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;

    }
    // if (request.role == "admin" || request.role == "doctor") {

    Doctor.updateOne({ _id: request.body._id }, {
        $set: {
            // _id: request.body.id,
            name: request.body.name,
            email: request.body.email,
            image:request.body.image,
            password: request.body.password,
            age: request.body.age,
            spec: request.body.spec,
            appointmentDate: request.body.appointmentDate,
            availability: request.body.availability,
            phone: request.body.phone,
            isMarried: request.body.isMarried,
            rating: request.body.rating
        }
    }).then(data => {

        if (data == null) throw new Error("doctor not found");
        response.status(200).json({ message: "Updated", data })
    })
        .catch(error => next(error))
}
// else {
//     throw new Error("Not Authorized. only doctor can do that");
// }
// }

//delete doctor
exports.deleteDoctor = async (request, response, next) => {

    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }
    // if (request.role == "admin" || request.role == "doctor") {
    try {
        let data = await Doctor.findOneAndDelete({ _id: request.body._id });
        if (data == null) throw new Error("doctor not found");
        response.status(200).json({ message: "deleted" })
    }
    catch (error) {
        next(error)
    }
}
// else {
//     throw new Error("Not Authorized. only doctor can do that");
// }
// }


//get only one doctor
exports.getDoctor = (request, response,next) => {

    // if (request.role == "admin" || request.role == "doctor") {

    Doctor.findOne({ _id: request.params.id })
            .then(data => {
                response.status(200).json(data)
            })
            .catch(error => {
                next(error);
            })
        }
// else {
//     throw new Error("Not Authorized. only doctor can do that");
// }
// }