/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carryover = 0;
  let ans = '';

  while (i >= 0 || j >= 0) {
    if (i >= 0) {
      x = parseInt(a[i]);
    } else {
      x = 0;
    }
    if (j >= 0) {
      y = parseInt(b[j]);
    } else {
      y = 0;
    }

    let sum = x + y + carryover;

    if (sum % 2 === 1) {
      ans += "1";
    } else {
      ans += "0";
    }

    if (sum > 1) {
      carryover = 1;
    } else {
      carryover = 0;
    }


    i--;
    j--;
  }

  ans = ans.split('').reverse().join('');
  if (carryover) {
    ans = "1" + ans;
  }

  return ans;
}
