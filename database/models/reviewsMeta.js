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
