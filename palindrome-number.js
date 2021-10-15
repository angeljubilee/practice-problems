/**
 * @param {number} x
 * @return {boolean}
 */

// take the last number and multiply by digits
// add number to reversePalindrom
// divide number by 10
var isPalindrome = function (x) {
  let original = x;
  let reverse = 0;
  let numDigits = parseInt(Math.log10(x));

  if (x < 0) {
    return false;
  }

  while (x > 9) {
    reverse += (x % 10) * Math.pow(10, numDigits);
    x = Math.trunc(x / 10);
    numDigits--;
  }
  reverse += x;
  console.log(reverse);
  console.log(original);
  console.log(typeof reverse);
  console.log(typeof original);
  return original === reverse;
};

isPalindrome(-121);
