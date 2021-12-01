// index.ts launches all services within this API

import { api } from './api';

api().catch((err) => {
  console.log('Error while starting API. Details: ', err);
});
