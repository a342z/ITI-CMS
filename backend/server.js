const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
require("dotenv").config();


//import Patient
const patientRouter =require("./routers/patientRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());

//Connecting to Data Base
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("DB Connected");

    //Listing to PORT
app.listen(process.env.PORT_NUMBER,()=>{
  console.info("Server is up and running");
});

  })
  .catch(() => {
    console.log("DB Error.");
  });
  



//Routes
app.use(patientRouter);


//Not found MW
app.use((request, response) => {
  response.status(404).json({ data: "Not Found" });
})

//Error MW
app.use((error, request, response, next) => {  
  let status = error.status || 500;
  response.status(status).json({ Error: error + "" });
})
