import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

import profile from './models/profile'
import projects from './models/projects'

app.listen(port, () => {
  // console.log('running server');
});

app.get('/', (request: Request, response: Response) => {
  try {
    response.status(200).json({
      description: 'welcome to my node API portfolio',
      version: '0.0.4',
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
app.get('/api/projects', (request: Request, response: Response) => {
  try {
    response.status(200).json(projects);
  } catch (error) {
    return response.status(500).send('Error server')
  }
});

export default app;
