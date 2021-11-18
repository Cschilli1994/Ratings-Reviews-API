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
        res.json(result.rows);
      }
    })
  },
};