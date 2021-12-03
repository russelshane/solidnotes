import cors from 'cors';
import express, { json, urlencoded, Express } from 'express';

import logger from '../util/logger';
import { config } from '../util/config';
import { corsConfig } from '../util/cors';
import { urlEncodedConfig } from '../util/urlEncoded';
import { setupAPIRoutes } from './setupRoutes';
import { ConnectDatabase } from '../service/Database';

// Function to launch the server's parent API service
async function api() {
  const app: Express = express();
  app.use(urlencoded(urlEncodedConfig));
  app.use(cors(corsConfig));
  app.use(json());

  // Create connection with PostgreSQL
  await ConnectDatabase();

  // Attach API routes and the handlers
  setupAPIRoutes(app);

  // Initialize API service
  app.listen(config.PORT, () => {
    logger.info('SolidNotes services are running...');
  });
}

export { api };
