const express = require('express');
const router = express.Router();
const pingController = require('../controllers/pingController');

router.get('/ping', pingController.getPing);

// app.get('/', (req, res) => {
//     res.send('¡La API está viva! Prueba en /api/ping');
// });

module.exports = router;