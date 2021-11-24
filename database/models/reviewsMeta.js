const database = require('../database.js');

module.exports = {
  get: (params, callback) => {
    const {product_id} = params;

    database.query(`SELECT json_build_object(
      'ratings',
      (select json_object_agg(rating, count)
      from
      (select distinct rating, count(rating)
      from reviews where product_id = ${product_id}
      group by rating)
      as counts)
      ,
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

// (SELECT json_build_object(
//   '1', (SELECT count(*) FILTER (WHERE rating = 1) AS "1" from reviews WHERE product_id = ${product_id}),
//   '2', (SELECT count(*) FILTER (WHERE rating = 2) AS "2" from reviews WHERE product_id = ${product_id}),
//   '3', (SELECT count(*) FILTER (WHERE rating = 3) AS "3" from reviews WHERE product_id = ${product_id}),
//   '4', (SELECT count(*) FILTER (WHERE rating = 4) AS "4" from reviews WHERE product_id = ${product_id}),
//   '5', (SELECT count(*) FILTER (WHERE rating = 5) AS "5" from reviews WHERE product_id = ${product_id})
//   ))