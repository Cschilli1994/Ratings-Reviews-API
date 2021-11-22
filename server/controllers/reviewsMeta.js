const models = require('../../database/models');

module.exports = {
  get: (req, res) => {
    console.log(req.query.product_id);
    models.reviewsMeta.get(req.query, (err, result) => {

      if (err) {
        res.sendStatus(500);
        console.log(err);
      } else {
        const reviewMeta = result.rows[0].json_build_object;
        reviewMeta.product_id = req.query.product_id;
        res.json(reviewMeta).status(200);
      }
    })
  },
};