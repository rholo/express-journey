import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

import profile from './models/profile'
import projects from './models/projects'
import { socialNetworks } from './models/socialNetworks'
app.listen(port, () => {
  // console.log('running server'); 
});
app.get('/', (_request: Request, response: Response) => {
  try {
    response.status(200).json({
      description: 'welcome to my Node API portfolio',
      version: '0.0.4',
      path: 'api',
      availableRoutes: [
        '/api/portfolio',
        '/api/projects'
      ]
    });
  } catch (error) {
    return errorHandler(response, 500)
  }

});

app.get('/api/portfolio', (_request: Request, response: Response) => {
  try {
    response.status(200).json({ ...profile, socialNetworks });
  } catch (error) {
    return errorHandler(response, 500)
  }
});

app.get('/api/projects', (_request: Request, response: Response) => {
  try {
    response.status(200).json(projects);
  } catch (error) {
    return errorHandler(response, 500)
  }
});

app.get('api/project/:id', (request: Request, response: Response) => {
  try {
    console.log(request.params.id)
  } catch (error) {
    return errorHandler(response, 500)
  }
})

const errorHandler = (response: Response, error: number) => {
  switch (error) {
    case 500:
      return response.status(error).send('Error server')
    case 204:
      return response.status(error).send('Not exist')
    default:
      return 'try to resolve this error soon!'
  }
}
export default app;
