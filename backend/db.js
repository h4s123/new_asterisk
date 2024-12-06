// backend/db.js
const { Pool } = require('pg');
require('dotenv').config();  // To use environment variables like DB connection string

// Set up the PostgreSQL connection pool
const pool = new Pool({
  user: process.env.PG_USER,     // Username from .env
  host: process.env.PG_HOST,     // Host for PostgreSQL, e.g., localhost or IP address
  database: 'asteriskDB',        // Database name
  password: process.env.PG_PASSWORD,  // Password from .env
  port: process.env.PG_PORT,     // PostgreSQL port (default is 5432)
});

module.exports = pool;
