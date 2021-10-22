/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let sqr = 0;

  while (sqr <= x) {
    if ((sqr * sqr) === x) {
      return sqr
    }
    if ((sqr * sqr) > x) {
      return sqr - 1;
    }
    sqr++;
  }
};
