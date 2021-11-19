const router = require('express').Router();
const controllersgeneral = require('../controllers/generalCtrl.js');

router.get('/info', controllersgeneral.getGeneral)


module.exports = router;
