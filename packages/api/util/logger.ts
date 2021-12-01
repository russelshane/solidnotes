import pino from 'pino';
import memoize from 'micro-memoize';

export type AppLogger = pino.Logger;

export default memoize(
  (name = 'solidnotes') =>
    pino({
      name,
      enabled: true,
      prettyPrint: {
        ignore: 'pid,hostname',
        translateTime: 'HH:MM:ss',
      },
    }) as AppLogger,
)();
