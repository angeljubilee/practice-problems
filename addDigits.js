/**
 * @param {number} num
 * @return {number}
 */

//38 % 10 = 8
//38 - 8 = 30
//30 / 10 = 3
//38 / 10 = Math.floor
var addDigits = function (num) {
  let sum = 0;

  if (num < 10) {
    return num;
  }

  while (num > 10) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  sum += num;
  return addDigits(sum);
};
