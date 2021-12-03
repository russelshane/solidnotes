import { Express } from 'express';
import { defaultAPIRoute } from './handlers/default';

async function setupAPIRoutes(app: Express) {
  // Primary routes
  app.get('/', defaultAPIRoute);

  // User/authentication routes

  // Notes routes
}

export { setupAPIRoutes };
