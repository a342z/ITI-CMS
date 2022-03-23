const express=require("express");
const {body,query,param}=require("express-validator")
const router=express.Router();

const controller=require("../controllers/clinicController");
//let isAuth = require("./../middleware/authMW");

router.route("/clinics")
.get([],controller.getAllClinics)

.post([

],controller.addClinic)




router.route("/clinics/:id")
.get([],controller.getClinic)



.put([

],controller.updateClinic)


.delete([

],controller.deleteClinic)





module.exports=router