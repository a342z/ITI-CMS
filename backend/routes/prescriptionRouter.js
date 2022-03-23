const express = require("express");
const router = express.Router();
const controller = require("../controllers/prescriptionController");
router
  .route("/prescription/:id?")
  .get(controller.allPrescr)
  .post(controller.addPrescr)
  .put(controller.updatePrescr)
  .delete(controller.deletePrescr);

module.exports = router;
