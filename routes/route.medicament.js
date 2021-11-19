const router = require('express').Router();
const controllerMedicament = require('../controllers/controllers.medicament');


router.post('/add', controllerMedicament.addMedicament);
router.get('/all', controllerMedicament.allmedicament);
router.get('/:id', controllerMedicament.getMedicament);
router.put('/:id', controllerMedicament.updateMedicament);
router.delete('/:id', controllerMedicament.supMedicament);

module.exports = router;
