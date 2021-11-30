const models = require('../../database/models');

module.exports = {
  get: (req, res) => {
    // console.log('type of', typeof req.query.product_id);
    const id = Number(req.query.product_id);
    if (id >= 1) {
      models.reviews.get(req.query, (err, result) => {
        if (err) {
          res.send('Invalid query.').status(500);
          console.log(err);
        } else {

          res.json(
            {
              product: req.query.product_id,
              page: 0,
              count: req.query.count,
              results: result.rows
            }
          );
        }
      });
    } else {
      res.send('Invalid query.').status(400);
    }
  },
  add: (req, res) => {
    console.log(req.body);
    models.reviews.add(req.body, (err) => {
      if (err) {
        res.sendStatus(500);
        console.log(err, "line 32-contollers/reviews.js");
      } else {
        res.sendStatus(201);
        console.log('REVIEW SAVED');
      }
    })
  },
  helpful: (req, res) => {
    models.reviews.helpful(req.params, (err, result) => {
      if (err) {
        res.sendStatus(500);
        console.log(err, "line 43-contollers/reviews.js");
      } else {
        res.sendStatus(204);
        console.log(`Updated Helpful Review:${req.params.review_id}`);
      }
    })
  },

  report: (req, res) => {
    models.reviews.report(req.params, (err) => {
      if (err) {
        res.sendStatus(500);
        console.log(err, "line 55-contollers/reviews.js");
      } else {
        res.sendStatus(204);
        console.log(`Reported Review:${req.params.review_id}`);
      }
    })
  }
};