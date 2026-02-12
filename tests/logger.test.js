const chalk = require('chalk');
const logger = require('../src/logger');

// Disable color output so we can test plain text content
chalk.level = 0;

describe('Logger', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('info() returns message with [INFO] prefix', () => {
    const result = logger.info('Server started on port 3000');
    expect(result).toBe('[INFO] Server started on port 3000');
  });

  test('success() returns message with [SUCCESS] prefix', () => {
    const result = logger.success('Build completed');
    expect(result).toBe('[SUCCESS] Build completed');
  });

  test('warn() returns message with [WARN] prefix', () => {
    const result = logger.warn('Deprecated API usage detected');
    expect(result).toBe('[WARN] Deprecated API usage detected');
  });

  test('error() returns message with [ERROR] prefix', () => {
    const result = logger.error('Connection refused');
    expect(result).toBe('[ERROR] Connection refused');
  });

  test('highlight() returns message with [HIGHLIGHT] prefix using keyword color', () => {
    const result = logger.highlight('Important notice');
    expect(result).toBe('[HIGHLIGHT] Important notice');
  });

  test('all log functions call console.log', () => {
    logger.info('test');
    logger.success('test');
    logger.warn('test');
    logger.error('test');
    logger.highlight('test');
    expect(console.log).toHaveBeenCalledTimes(5);
  });
});
