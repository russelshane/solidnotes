import { ConnectionOptions, createConnection } from 'typeorm';

import logger from '../util/logger';
import { Note } from '../entity/Note';
import { User } from '../entity/User';

async function ConnectDatabase() {
  await createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [User, Note],
    ssl: {
      rejectUnauthorized: false,
    },
  } as ConnectionOptions).catch((err) => {
    logger.error(`Error while connecting to database. Details: ${err}`);
  });
}

export { ConnectDatabase };
