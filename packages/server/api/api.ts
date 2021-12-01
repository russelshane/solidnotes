import express, { json, urlencoded, Express } from 'express';
import { config } from '../util/config';
import logger from '../util/logger';

// Function to launch the server's parent API service
async function api() {
  const app: Express = express();
  app.use(urlencoded({ extended: true }));
  app.use(json());

  // Attach API routes and the handlers
  apiRoutes(app);

  // Initialize API service
  app.listen(config.PORT, () => {
    logger.info('SolidNotes services are running...');
  });
}

async function apiRoutes(app: Express) {
  app.get('/', (_, res) => {
    res.status(200).json({ message: 'SolidNotes v1.4.1' });
  });
}

export { api };
