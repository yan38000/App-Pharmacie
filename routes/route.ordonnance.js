const router = require('express').Router();
const controllerPatient = require('../controllers/ordonnanceCtrl');


router.post('/addOrdonnance', controllerPatient.addOrdonnance);
router.get('/allOrdonnance', controllerPatient.allOrdonnance);
router.get('/:id', controllerPatient.getOrdonnance);
router.put('/:id', controllerPatient.updateOrdonnance);
router.delete('/:id', controllerPatient.supOrdonnance);
router.post('/addDetail', controllerPatient.addDetailOrdonnance);
router.post('/supDetail', controllerPatient.supDetailOrdonnance);

module.exports = router;
