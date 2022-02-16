/**
 * @param {number} x
 * @return {number}
 */
/* sum = 0
   x = number % 10
   sum += 10 * sum + x
   x/10
*/
// var reverse = function (x) {
//   let sum = 0;
//   let m = 1;
//   if (x < 0) {
//     m = -1;
//   }

//   while (x > 9) {
//     sum = 10 * sum + (x % 10);
//     x /= 10;
//   }
//   return m * sum;
// };

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reverse = 0;
  num = Math.abs(x);
  while (num >= 10) {
    reverse = reverse * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  reverse = reverse * 10 + num;

  if (reverse <= -(2 ** 31) || reverse >= (2 ** 31)) {
    return 0;
  }

  reverse = (x < 0) ? -reverse : reverse;

  return reverse;
};
