const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Railway requiere SSL para conexiones externas
  ssl: {
    rejectUnauthorized: false 
  }
});

module.exports = pool;