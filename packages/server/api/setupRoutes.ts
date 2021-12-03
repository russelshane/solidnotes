import { Express } from 'express';

import { defaultAPIRoute } from './handlers/default';
import { register } from './handlers/register';

async function setupAPIRoutes(app: Express) {
  // Primary routes
  app.get('/', defaultAPIRoute);

  // User/authentication routes
  app.post('/api/register', register);

  // Notes routes
}

export { setupAPIRoutes };
