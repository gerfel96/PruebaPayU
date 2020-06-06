const express=require('express');
const router = express.Router(); 
const payment=require('../controllers/payment.controllers'); //Se añade el archivo de rutas

router.post('/payment',payment.Payment );
router.post('/authorize',payment.Authorize );
router.post('/capture',payment.Capture );
router.post('/refound',payment.Refound );


module.exports=router;