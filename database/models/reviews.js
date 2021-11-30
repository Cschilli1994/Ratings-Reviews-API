const database = require('../database.js');
const sorts = {
  relevant: 'helpfulness DESC, date DESC',
  helpful: 'helpfulness DESC',
  newest: 'date DESC'
}
module.exports = {
  get: (params, callback) => {
    const {product_id} = params;
    const page = params.page || 1;
    const count = params.count || 2;
    let sort = params.sort || 'relevant';
    sorts[sort] === undefined ? sort = 'relevant' : sort = sort;
    console.log(`PRODUCT_ID = ${product_id} :: PAGE = ${page} :: COUNT = ${count} :: SORT = ${sort}`)
    // console.log(params);
    const skip = (page -1) * count;
    const query = `
    SELECT
      review_id,
      rating,
      summary,
      recommend,
      response,
      body,
      date,
      reviewer_name,
      helpfulness,
      get_photos(review_id) AS photos


    FROM reviews
    WHERE product_id = ${product_id} AND reported = false
    ORDER BY ${sorts[sort]} LIMIT ${count} OFFSET ${skip}
    ;
    `;
    // console.log(query);
    database.query(query, callback);
  },

  add: ({rating, summary, body, photos, name, email, recommend, product_id, characteristics}, callback) => {
    const photoArr = [];

    photos.forEach(photo => {
      photoArr.push(`'${photo}'`);
    })

    const query = `
    WITH rev_id AS (
      INSERT INTO reviews(product_id, rating, date, summary, body, recommend, email, reviewer_name)
      VALUES (${product_id}, ${rating}, '${new Date().getTime().toString()}', '${summary}', '${body}', ${recommend}, '${email}', '${name}')
      RETURNING review_id
    ), photos AS (
      INSERT INTO review_photos(review_id, url)
      SELECT review_id, unnest FROM (UNNEST(ARRAY[${photoArr}]) CROSS JOIN rev_id

    ) AS rev_photo
    )
    INSERT INTO characteristic_reviews(characteristic_id, review_id, value)
    SELECT key::int, review_id, value::text::int FROM (json_each('${JSON.stringify(characteristics)}')
    CROSS JOIN rev_id as review_id) AS char_obj;

    `;
    console.log(query);
    database.query(query, callback)

  },
  helpful: ({review_id}, callback) => {
    database.query(
      `UPDATE reviews
       SET helpfulness = helpfulness + 1
       WHERE review_id = ${review_id};`, callback
    )
  },

  report: ({review_id}, callback) => {
    database.query(
      `UPDATE reviews
       SET reported = true
       WHERE review_id = ${review_id};`, callback
    )

  }
}



