
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  var memo = new Array(n);
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 2;

  if (memo[n] !== undefined) {
    return memo[n];
  }

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};
