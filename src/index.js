const logger = require('./logger');
const reporter = require('./reporter');

module.exports = {
  ...logger,
  reporter,
};
