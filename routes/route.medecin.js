const router = require('express').Router();
const controllersMedecin = require('../controllers/medecinCtrl');

router.post('/addMedecin', controllersMedecin.addMedecin);
router.get('/allMedecin', controllersMedecin.AllMedecin);
router.get('/:id', controllersMedecin.getMedecin);


module.exports = router;
