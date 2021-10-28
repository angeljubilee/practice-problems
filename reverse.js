/**
 * @param {number} x
 * @return {number}
 */
/* sum = 0
   x = number % 10
   sum += 10 * sum + x
   x/10
*/
var reverse = function (x) {
  let sum = 0;
  let m = 1;
  if (x < 0) {
    m = -1;
  }

  while (x > 9) {
    sum = 10 * sum + (x % 10);
    x /= 10;
  }
  return m * sum;
};
