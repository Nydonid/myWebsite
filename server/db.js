const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    database: 'recipes_db'
})

module.exports = pool;