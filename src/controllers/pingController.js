const pool = require('../database');

// El pong que ya tienes
exports.getPing = (req, res) => {
    res.status(200).json({ message: "pong" });
};

// Nuevo: Prueba de conexión a la DB
exports.getDbCheck = async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.status(200).json({ 
            status: "Conectado a Postgres", 
            serverTime: result.rows[0].now 
        });
    } catch (err) {
        res.status(500).json({ error: "Error de conexión", details: err.message });
    }
};