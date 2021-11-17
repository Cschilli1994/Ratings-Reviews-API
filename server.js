const express = require('express');
const db = require('./database.js');

const server = express()
const port = 3010

server.get('/', (req, res) => {
  db.test();
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})