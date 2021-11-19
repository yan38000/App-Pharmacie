const router = require('express').Router();
const controllersMedecin = require('../controllers/controllers.medecin');

router.post('/addMedecin', controllersMedecin.addMedecin);
router.get('/allMedecin', controllersMedecin.AllMedecin);
router.get('/:id', controllersMedecin.infoMedecin);


module.exports = router;
