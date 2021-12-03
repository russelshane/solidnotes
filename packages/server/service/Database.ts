import { ConnectionOptions, createConnection } from 'typeorm';

import logger from '../util/logger';
import { User } from '../entity/User';

async function ConnectDatabase() {
  await createConnection({
    type: 'postgres',
    synchronize: true,
    url: process.env.DATABASE_URL,
    entities: [User],
    ssl: {
      rejectUnauthorized: false,
    },
  } as ConnectionOptions).catch((err) => {
    logger.error(`Error while connecting to database. Details: ${err}`);
  });
}

export { ConnectDatabase };
