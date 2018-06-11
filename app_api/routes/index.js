var express = require('express');
var router = express.Router();

//var crudCtrl = require('../controllers/crud');
var iot = require('../controllers/iot');

//iot nuevo dispositivos iot
router.post( '/iot' ,iot.CrearUbicacion );

//iot actualizar dispositivos iot
router.post( '/iot/:rolid' ,iot.ActualizarUbicacion );

//consultar disostivos iot
router.get( '/iot',iot.getTodos );
router.get('/iot/basurero', iot.getBasurero);
router.get('/iot/camion', iot.getCamion);


module.exports = router;
