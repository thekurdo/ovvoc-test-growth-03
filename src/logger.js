const chalk = require('chalk');

/**
 * Pretty Logger - Colorful logging utility for CLI applications
 *
 * Uses chalk 4 APIs including keyword colors and CJS require().
 * chalk 5+ is ESM-only and removed keyword() support.
 */

/**
 * Log an informational message in blue.
 * @param {string} msg - The message to log
 * @returns {string} The formatted string
 */
function info(msg) {
  const formatted = chalk.blue(`[INFO] ${msg}`);
  console.log(formatted);
  return formatted;
}

/**
 * Log a success message in bold green.
 * @param {string} msg - The message to log
 * @returns {string} The formatted string
 */
function success(msg) {
  const formatted = chalk.green.bold(`[SUCCESS] ${msg}`);
  console.log(formatted);
  return formatted;
}

/**
 * Log a warning message in yellow.
 * @param {string} msg - The message to log
 * @returns {string} The formatted string
 */
function warn(msg) {
  const formatted = chalk.yellow(`[WARN] ${msg}`);
  console.log(formatted);
  return formatted;
}

/**
 * Log an error message in bold red.
 * @param {string} msg - The message to log
 * @returns {string} The formatted string
 */
function error(msg) {
  const formatted = chalk.red.bold(`[ERROR] ${msg}`);
  console.log(formatted);
  return formatted;
}

/**
 * Log a highlighted message in orange.
 * Uses chalk.keyword('orange') which was removed in chalk 5.
 * @param {string} msg - The message to log
 * @returns {string} The formatted string
 */
function highlight(msg) {
  const formatted = chalk.keyword('orange')(`[HIGHLIGHT] ${msg}`);
  console.log(formatted);
  return formatted;
}

module.exports = {
  info,
  success,
  warn,
  error,
  highlight,
};
