const express = require('express');
const pingRoutes = require('./routes/pingRoutes');

const app = express();

app.use(express.json());

// Rutas
app.use('/api', pingRoutes);

module.exports = app;