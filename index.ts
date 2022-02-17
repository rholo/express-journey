// run `node index.js` in the terminal
import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

import profile from './models/profile'
// const projects = require('./models/projects')

app.listen(port, () => {
  // console.log('running server');
});

app.get('/', (request: Request, response: Response) => {
  try {
    response.status(200).json({
      description: 'welcome to my node API portfolio',
      version: 1.0,
      path: 'API',
      availableRoutes: [
        '/api/portfolio'
      ]
    });
  } catch (error) {
    return response.status(500).send('Error server')
  }

});
app.get('/api/portfolio', (request: Request, response: Response) => {
  try {
    response.status(200).json(profile);
  } catch (error) {
    return response.status(500).send('Error server')
  }
});


// console.log(`Hello Node.js v${process.versions.node}!`);
