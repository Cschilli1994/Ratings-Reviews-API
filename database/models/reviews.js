const database = require('../database.js');

module.exports = {
  get: (params, callback) => {
    const {product_id, limit} = params;
    database.query(`SELECT * FROM reviews WHERE product_id = ${product_id} LIMIT ${limit}`, callback);
  }
}

// pool.query('SELECT * FROM reviews WHERE product_id = 40344',
//   (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res.rows);
//     }