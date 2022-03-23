//***************************requires********************* */
require("dotenv").config();
//call Express
const express = require("express");
// getting body parser
const body_parser = require("body-parser");
// getting morgan
const morgan = require("morgan");
//getting mongoose
const mongoose = require("mongoose");

//import Patient
const patientRouter = require("./routes/patientRouter");
const clinicRouter = require("./routes/clinicRouter");
const testRouter = require("./routes/testRouter");
const doctorRouter = require("./routes/doctorRouter");
const medicine = require("./routes/medicineRouter");
const appointmentRouter = require("./routes/appointmentRouter");
const prescriptionRouter = require("./routes/prescriptionRouter");

//************************DB Server****************************** */
// create Server
const app = express();

//open the server on port number 8080
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connected");

    app.listen(process.env.PORT_NUMBER || 8080, () => {
      console.log("I am Listenining Don't Worry");
    });
  })
  .catch((error) => {
    console.log("DB problem");
  });

// app.listen(process.env.PORT||8080,()=>{
//     console.log("I am Listenining Don't Worry")
// });

// First MW =>  request url and method-request- using morgan package
app.use(morgan(":method :url"));
//second MW => // CORS MW that allow access control origin, methods, headers
// to make any other website communicate with my server as" RESTful API"
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Methods",
    "GET,POST,DELETE,PUT,OPTIONS"
  );
  response.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

// calling body parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
//************************Routers******************* */
app.use(testRouter);

//third MW => //************ */ NOT Found => if my routers don't exist ***************
// app.use((request, response, next) => {
//   response.status(404).json({ data: "Not Found" });
// });

//Routes
app.use(clinicRouter);
app.use(doctorRouter);
app.use(testRouter);
app.use(medicine);
app.use(appointmentRouter);
app.use(patientRouter);
app.use(prescriptionRouter);
//Not found MW
app.use((request, response) => {
  response.status(404).json({ data: "Not Found" });
});

//Error MW
app.use((error, request, response, next) => {
  let status = error.status || 500;
  response.status(status).json({ Error: error + "" });
});
