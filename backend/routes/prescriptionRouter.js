const express = require("express");
const router = express.Router();
const controller = require("./../controllers/prescriptionController");
router
<<<<<<< HEAD
  .route("/prescriptions/:id?")
  .get(controller.getOnePrescr)

  .put(controller.updatePrescr)
  .delete(controller.deletePrescr);

router.post("/prescriptions", controller.addPrescr);
router.get("/prescriptions", controller.getOnePrescr);

=======
  .route("/prescription/:id?")
  .get(controller.allPrescr)
  .post(controller.addPrescr)
  .put(controller.updatePrescr)
  .delete(controller.deletePrescr);

>>>>>>> main
module.exports = router;
