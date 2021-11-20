const models = require('../../database/models');

module.exports = {
  get: (req, res) => {
    console.log(req.query, 'recieved');
    models.reviews.get(req.query, (err, result) => {
      if (err) {

        res.sendStatus(500);
        console.log(err);
      } else {
        console.log(result.rows);
        const results = result.rows.map(review => {
          return review.json_build_object;
        })
        const reviews = {
          product: req.query.product_id,
          page: 0,
          count: req.query.count,
          results: results
        };
        // console.log(reviews.results);
        res.json(reviews);
      }
    })
  },
};