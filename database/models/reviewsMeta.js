const database = require('../database.js');

module.exports = {
  get: (params, callback) => {
    const {product_id, limit} = params;
    // database.query(`
    // SELECT characteristics.id, name, AVG(characteristic_reviews.value)
    // FROM characteristics, characteristic_reviews
    // WHERE characteristics.product_id = ${product_id}
    // AND characteristic_reviews.characteristic_id = characteristics.id
    // GROUP BY characteristics.id;`, callback);
    database.query(`SELECT json_build_object(
      'ratings', (SELECT json_build_object(
      '1', (SELECT count(*) FILTER (WHERE rating = 1) AS "1" from reviews WHERE product_id = ${product_id}),
      '2', (SELECT count(*) FILTER (WHERE rating = 2) AS "2" from reviews WHERE product_id = ${product_id}),
      '3', (SELECT count(*) FILTER (WHERE rating = 3) AS "3" from reviews WHERE product_id = ${product_id}),
      '4', (SELECT count(*) FILTER (WHERE rating = 4) AS "4" from reviews WHERE product_id = ${product_id}),
      '5', (SELECT count(*) FILTER (WHERE rating = 5) AS "5" from reviews WHERE product_id = ${product_id})
      )),
      'recommended', (json_build_object(
        'false', (get_count(false, ${product_id})),
        'true', (get_count(true, ${product_id}))
        )
      ),
      'characteristics', (
            SELECT json_object_agg(name,
              json_build_object(
              'id', id,
              'value', (get_avg(id))
              )

                        )
        FROM characteristics
        WHERE product_id = ${product_id}

      )
    );`, callback);
  }
}

/**
 * SELECT characteristics.id, name, AVG(characteristic_reviews.value)
FROM characteristics, characteristic_reviews
WHERE characteristics.product_id = ${product_id} AND characteristic_reviews.characteristic_id = characteristics.id
GROUP BY characteristics.id;
 */


// {
//   ratings: ` SELECT
//   count(*) FILTER (WHERE rating = 5) AS "5",
//   count(*) FILTER (WHERE rating = 4) AS "4",
//   count(*) FILTER (WHERE rating = 3) AS "3",
//   count(*) FILTER (WHERE rating = 2) AS "2",
//   count(*) FILTER (WHERE rating = 1) AS "1"
//   from reviews WHERE product_id = ${product_id};`,

//   traits: SELECT characteristics.id, name, AVG(characteristic_reviews.value)
//   FROM characteristics, characteristic_reviews
//   WHERE characteristics.product_id = ${product_id} AND characteristic_reviews.characteristic_id = characteristics.id
//   GROUP BY characteristics.id;
// }

// {
//   ratings":{"1":"0","2":"1","3":"0","4":"1","5":"1"},
//   traits: [
//     {},
//     {},
//     {}
//   ]
// }