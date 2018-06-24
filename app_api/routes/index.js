var express = require('express');
var router = express.Router();

//var crudCtrl = require('../controllers/crud');
var iot = require('../controllers/iot');

//iot nuevo dispositivos iot
router.post( '/iot' ,iot.CrearUbicacion );

//iot actualizar dispositivos iot
router.post( '/iot/:iotid' ,iot.ActualizarUbicacion );
router.post('/iot2/:iotid/:tipo/:estado/:lon/:lat', iot.ActualizarUbicacion2);

//consultar disostivos iot
router.get( '/iot',iot.getTodos );
router.get('/iot2', iot.getTodos2);
router.get('/iot/basurero', iot.getBasurero);
router.get('/iot/camion', iot.getCamion);


module.exports = router;
