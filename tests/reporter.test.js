const chalk = require('chalk');
const reporter = require('../src/reporter');

// Disable color output so we can test plain text content
chalk.level = 0;

describe('Reporter', () => {
  test('formatStatus() returns correct status labels', () => {
    expect(reporter.formatStatus('pass')).toBe('PASS');
    expect(reporter.formatStatus('fail')).toBe('FAIL');
    expect(reporter.formatStatus('warn')).toBe('WARN');
    expect(reporter.formatStatus('skip')).toBe('SKIP');
    expect(reporter.formatStatus('unknown')).toBe('unknown');
  });

  test('formatDuration() returns duration string with ms suffix', () => {
    expect(reporter.formatDuration(50)).toBe('50ms');
    expect(reporter.formatDuration(250)).toBe('250ms');
    expect(reporter.formatDuration(1200)).toBe('1200ms');
  });

  test('formatTable() formats rows into aligned table', () => {
    const rows = [
      { name: 'auth-service', value: 'v2.1.0', status: 'pass' },
      { name: 'api-gateway', value: 'v1.8.3', status: 'fail' },
    ];
    const table = reporter.formatTable(rows);
    expect(table).toContain('Name');
    expect(table).toContain('auth-service');
    expect(table).toContain('api-gateway');
    expect(table).toContain('PASS');
    expect(table).toContain('FAIL');
  });

  test('formatTable() handles empty rows', () => {
    const table = reporter.formatTable([]);
    expect(table).toContain('Name');
    expect(table).toContain('-');
  });
});
