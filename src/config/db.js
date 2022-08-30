const { Pool } = require('pg');
const dotenv = require('dotenv').config();
console.log(dotenv);

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('connection susseccfully Done!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};