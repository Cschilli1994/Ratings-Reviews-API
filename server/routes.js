const router = require('express').Router();
const db = require('../database/database.js');
const controller = require('./controllers');

router.get('/', (req, res) => {
  db.test();
})
router.get('/api/reviews', controller.reviews.get)



module.exports = router;