const router = require('express').Router();
const db = require('../database/database.js');
const controller = require('./controllers');

router.get('/', (req, res) => {
  res.send('SERVER RUNNING!').status(200);
})

//REVIEWS
router.get('/api/reviews', controller.reviews.get);
router.post('/api/reviews', controller.reviews.add);

router.put('/api/reviews/:review_id/helpful', controller.reviews.helpful);
router.put('/api/reviews/:review_id/report', controller.reviews.report);

//CHARACTERISTICS
router.get('/api/reviews/meta', controller.reviewsMeta.get)



module.exports = router;