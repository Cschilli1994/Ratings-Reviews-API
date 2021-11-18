const Pool = require('pg').Pool

const dotenv = require('dotenv');
dotenv.config();


const database = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

module.exports = database;
// module.exports = {
//   test: () => {
//     pool.query('SELECT * FROM reviews WHERE product_id = 40344',
//   (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res.rows);
//     }
//   })
//   }
// }
