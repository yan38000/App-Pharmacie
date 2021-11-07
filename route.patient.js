const router = require('express').Router();
const controllerPatient = require('../controllers/controllers.patient');


router.post("/addPatient", controllerPatient.addPatient);
router.get("/allPatient", controllerPatient.allPatient);
router.get("/:id", controllerPatient.infoPatient);
router.put('/:id', controllerPatient.updatePatient);
router.delete('/:id', controllerPatient.supPatient)

module.exports = router;