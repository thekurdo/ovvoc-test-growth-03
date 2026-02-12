const chalk = require('chalk');

/**
 * Report Formatter - Formats structured data with color coding.
 *
 * Uses chalk 4 APIs including CJS require and keyword colors.
 */

/**
 * Format an array of row objects into a colored text table.
 * Each row should have { name, value, status } properties.
 *
 * @param {{ name: string, value: string, status: string }[]} rows
 * @returns {string} The formatted table string
 */
function formatTable(rows) {
  const header = chalk.white.bold('  Name              Value         Status');
  const separator = chalk.gray('  ' + '-'.repeat(50));

  const lines = rows.map((row) => {
    const name = chalk.cyan(row.name.padEnd(18));
    const value = chalk.white(String(row.value).padEnd(14));
    const status = formatStatus(row.status);
    return `  ${name}${value}${status}`;
  });

  const table = [header, separator, ...lines].join('\n');
  return table;
}

/**
 * Return a colored status string based on the status value.
 *
 * @param {string} status - One of 'pass', 'fail', 'warn', 'skip'
 * @returns {string} Colored status text
 */
function formatStatus(status) {
  switch (status.toLowerCase()) {
    case 'pass':
      return chalk.green.bold('PASS');
    case 'fail':
      return chalk.red.bold('FAIL');
    case 'warn':
      return chalk.keyword('orange')('WARN');
    case 'skip':
      return chalk.gray('SKIP');
    default:
      return chalk.white(status);
  }
}

/**
 * Format a duration in milliseconds with color coding based on thresholds.
 *   - Under 100ms: green (fast)
 *   - 100-500ms: yellow (acceptable)
 *   - Over 500ms: red (slow)
 *
 * @param {number} ms - Duration in milliseconds
 * @returns {string} Colored duration string
 */
function formatDuration(ms) {
  const text = `${ms}ms`;

  if (ms < 100) {
    return chalk.green(text);
  } else if (ms <= 500) {
    return chalk.yellow(text);
  } else {
    return chalk.red.bold(text);
  }
}

module.exports = {
  formatTable,
  formatStatus,
  formatDuration,
};
