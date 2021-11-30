const Pool = require('pg').Pool

const dotenv = require('dotenv');
dotenv.config();


const database = new Pool({
  user: 'postgres',
  host: '3.142.92.90',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

module.exports = database;
