const database = require('../database.js');

module.exports = {
  get: (params, callback) => {
    const {product_id, count} = params;
    database.query(`
    SELECT json_build_object(
      'review_id', review_id,
      'rating', rating,
      'summary', summary,
      'recommend', recommend,
      'response', response,
      'body', body,
      'date', date,
      'reviewer_name', reviewer_name,
      'helpfulness', helpfulness,
      'photos', get_photos(review_id)
        )

    FROM reviews
    WHERE product_id = ${product_id};
    `, callback);
  }
}

// pool.query('SELECT * FROM reviews WHERE product_id = 40344',
//   (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res.rows);
//     }

/**

//GETS COUNT FOR PRODUCT

` SELECT
count(*) FILTER (WHERE rating = 5) AS "5",
count(*) FILTER (WHERE rating = 4) AS "4",
count(*) FILTER (WHERE rating = 3) AS "3",
count(*) FILTER (WHERE rating = 2) AS "2",
count(*) FILTER (WHERE rating = 1) AS "1"
from reviews WHERE product_id = ${product_id};`

 */