const express = require('express');
const router = require('./routes.js');
const cors = require('cors');
const fs = require('fs');


const server = express();
const port = 3010;

server.set('port', port);
server.use(cors());
server.use(express.json());
server.use('/loaderio-dd9ee57b74de0f33360f8953ccf153c6', (req, res) => {
  const loaderIOfile = fs.readFileSync('./loaderio-dd9ee57b74de0f33360f8953ccf153c6.txt', 'utf-8');
  res.send(loaderIOfile)
  })
  server.use('/', router);
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

