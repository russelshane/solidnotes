import cors from 'cors';
import connectRedis from 'connect-redis';
import session from 'express-session';
import express, { json, urlencoded, Express } from 'express';
import { createClient } from 'redis';

import logger from '../util/logger';
import { config } from '../util/config';
import { corsConfig } from '../util/cors';
import { urlEncodedConfig } from '../util/urlEncoded';
import { setupAPIRoutes } from './setupRoutes';
import { ConnectDatabase } from '../service/Database';

// Function to launch the server's parent API service
async function api() {
  const app: Express = express();

  // Create connection with PostgreSQL
  await ConnectDatabase();

  // Create connection with Redis
  const RedisStore = await connectRedis(session);
  const redisClient = await createClient({
    url: process.env.REDIS_URL,
  }).on('connect', () => {
    logger.info(`Connected to Redis!`);
  });

  // API middlewares
  app.use(urlencoded(urlEncodedConfig));
  app.use(cors(corsConfig));
  app.use(json());
  app.use(
    session({
      name: 'qid',
      store: new RedisStore({ client: redisClient, disableTouch: true }),
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 5, // 5 years
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      },
    }),
  );

  // Attach API routes and the handlers
  setupAPIRoutes(app);

  // Initialize API service
  app.listen(config.PORT, () => {
    logger.info('SolidNotes services are running...');
  });
}

export { api };
