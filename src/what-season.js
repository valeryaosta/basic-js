const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)){
    throw new Error('Invalid date!');
  }

  if (Object.getOwnPropertyNames(date).length !== 0) {
    throw new Error('Invalid date!');
  }
  const seasonsArr = ['winter', 'spring', 'summer', 'autumn'];
  const monthIndex = Math.floor(((date.getMonth() + 1) % 12) / 3);

  return seasonsArr[monthIndex];
}

module.exports = {
  getSeason
};
