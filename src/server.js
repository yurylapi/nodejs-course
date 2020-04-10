const { PORT } = require('./common/config');
const app = require('./app');
const { logger } = require('./lib/logger');

process
  .on('unhandledRejection', (reason, promise) => {
    logger.info('Unhandled Rejection at Promise', reason, promise);
  })
  .on('uncaughtException', err => {
    logger.info(`Uncaught Exception thrown: ${err.message}`, err);
  });

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
