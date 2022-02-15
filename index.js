// run `node index.js` in the terminal
const express = require('express');
const app = express();
const port = 3000;

const { profile } = require('./models/profile');

app.listen(port, () => {
  console.log('running server');
});

app.get('/', (request, response) => {
  try {
    response.json({
      description: 'welcome to my node API portfolio',
      version: 1.0,
      path: 'API',
      availableRoutes: [
        'api/portfolio'
      ]
    });
  } catch (error) {
    return response.status(500).send('Error server')
  }

});
app.get('/api/portfolio', (request, response) => {
  try {
    response.json(profile);
  } catch (error) {
    return response.status(500).send('Error server')
  }
});


console.log(`Hello Node.js v${process.versions.node}!`);
