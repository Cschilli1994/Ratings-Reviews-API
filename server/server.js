const express = require('express');
const router = require('./routes.js');



const server = express();
const port = 3010;

server.set('port', port);

server.use('/', router);


server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})