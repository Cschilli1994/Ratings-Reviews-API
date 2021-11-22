const models = require('../../database/models');

module.exports = {
  get: (req, res) => {
    console.log(req.query, 'recieved');
    models.reviews.get(req.query, (err, result) => {
      if (err) {

        res.sendStatus(500);
        console.log(err);
      } else {


        const reviews = {
          product: req.query.product_id,
          page: 0,
          count: req.query.count,
          results: result.rows
        };
        // console.log(reviews.results);
        res.json(reviews);
      }
    })
  },
  add: (req, res) => {
    models.reviews.add(req.body, (err) => {
      if (err) {
        res.sendStatus(500);
        console.log(err, "line 29-contollers/reviews.js");
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
        console.log(err, "line 40-contollers/reviews.js");
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
        console.log(err, "line 52-contollers/reviews.js");
      } else {
        res.sendStatus(204);
        console.log(`Reported Review:${req.params.review_id}`);
      }
    })
  }
};