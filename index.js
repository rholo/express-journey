// run `node index.js` in the terminal
const express = require('express');
const app = express();
const port = 3000;

const { profile } = require('./models/profile');

app.listen(port, () => {
  console.log('running server');
});

app.get('/', (request, response) => {
  response.json(profile);
});

console.log(`Hello Node.js v${process.versions.node}!`);
