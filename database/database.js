const Pool = require('pg').Pool

const dotenv = require('dotenv');
dotenv.config();


const database = new Pool({
  user: 'postgres',
  host: '13.59.83.236',
  database: 'review-db',
  password: 'password',
  port: 5432,
});

module.exports = database;
