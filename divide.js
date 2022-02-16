/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function (dividend, divisor) {
  let MAX_NEG = -2147483648;
  let MAX_POS = 2147483647;


  if (dividend === MAX_NEG && divisor === -1) { // only situation that truncates to MAX_POS
    return MAX_POS;
  }
  if (dividend === MAX_POS && divisor === -1) { // only situation that truncates to MAX_NEG
    return MAX_NEG;
  }

  if (dividend === 0) {
    return 0;
  }

  let multiplier = 0;
  let sum = 0;
  while (sum < Math.abs(dividend)) {
    sum += Math.abs(divisor);
    multiplier++;
  }

  if (sum > Math.abs(dividend)) {
    multiplier--;
  }

  if ((divisor < 0 || dividend < 0) &&
    !(divisor < 0 && dividend < 0)) {

    multiplier *= -1;
  }

  return multiplier;

};
