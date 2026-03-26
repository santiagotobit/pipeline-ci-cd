const pool = require('../database');

// El pong que ya tienes
exports.getPing = (req, res) => {
    res.status(200).json({ message: "pong" });
};

// Nuevo: Healthcheck (app + DB opcional)
exports.getHealth = async (req, res) => {
    const payload = { status: "ok" };

    // En CI/local puede no existir DATABASE_URL. No fallamos por eso.
    if (!process.env.DATABASE_URL) {
        return res.status(200).json({ ...payload, db: "skipped" });
    }

    try {
        await pool.query('SELECT 1');
        return res.status(200).json({ ...payload, db: "ok" });
    } catch (err) {
        // No exponemos detalles internos, pero marcamos degradado.
        return res.status(200).json({ ...payload, db: "error" });
    }
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