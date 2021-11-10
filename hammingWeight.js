/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let i = 0;
  let count = 0;

  while (Math.pow(2, i) <= n) {
    if (n & Math.pow(2, i)) {
      count++;
    }
    i++;
  }
  return count;
};
