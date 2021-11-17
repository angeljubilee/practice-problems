/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const i = parseInt(s);

  if (isNaN(i)) {
    return 0;
  }

  if (i >= 2 ** 31) {
    return 2 ** 31 - 1;
  }

  if (i <= -(2 ** 31)) {
    return -(2 ** 31);
  }

  return i;

};
