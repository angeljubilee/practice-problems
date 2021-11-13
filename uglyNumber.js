/**
 * @param {number} n
 * @return {boolean}
 */
/*
 n = 1, return true
 take n / 2, 3, 5
 if (n not divisible any of number)
   return false
 if result is not 1, isUgly(result)
*/
var isUgly = function (n) {
  if (n === 1) {
    return true;
  }

  let results = []
  if ((n % 2) === 0) {
    results.push(n / 2);
  }
  if ((n % 3) === 0) {
    results.push(n / 3);
  }
  if ((n % 5) === 0) {
    results.push(n / 5);
  }

  if (results.length === 0) {
    return false;
  }

  let flag = false;
  for (let i = 0; i < results.length; i++) {
    flag = flag || isUgly(results[i]);
  }
  return flag;

};
