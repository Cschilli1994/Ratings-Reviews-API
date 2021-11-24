
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

// Increment a counter.
dogstatsd.increment('page.views')


const express = require('express');
const router = require('./routes.js');
const cors = require('cors');


const server = express();
const port = 3010;

server.set('port', port);
server.use(cors());
server.use(express.json());
server.use('/', router);


server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

module.exports = server;