const router = require('express').Router();
const db = require('../database/database.js');
const controller = require('./controllers');

router.get('/', (req, res) => {
  res.send('SERVER RUNNING!').status(200);
})

//REVIEWS
router.get('/api/reviews', controller.reviews.get);

//CHARACTERISTICS
router.get('/api/reviews/meta', controller.reviewsMeta.get)



module.exports = router;