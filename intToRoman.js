/**
 * @param {number} num
 * @return {string}
 */
/*
  MCMXCIV - 1000 + 900 + 90 + 4

  M  - 1000
  CM - 900
  CD - 500
  C  - 100
  XC - 90
  L  - 50
  XL - 40
  X  - 10
  IX - 9
  V  - 5
  IV - 4
  I  - 1

  3999 = 3 * 1000 + 900 + 90 + 9 = MMMCMXCIX
*/
var intToRoman = function (num) {
  let map = {
    [1000]: 'M',
    [900]: 'CM',
    [500]: 'D',
    [400]: 'CD',
    [100]: 'C',
    [90]: 'XC',
    [50]: 'L',
    [40]: 'XL',
    [10]: 'X',
    [9]: 'IX',
    [5]: 'V',
    [4]: 'IV',
    [1]: 'I'
  }

  Object.keys(map).sort((a, b) => b - a).reduce((acc, curr) => {
    if (num < curr) {
      return acc;
    }
    if (Number.isInteger(Math.log10(curr))) {
      acc += map[curr].repeat(Math.floor(num/curr));
      num -= curr * Math.floor(num/curr);
      return acc;
    }
    if (parseInt(num/curr) === 1) {
      console.log('here');
      acc += map[curr];
      num -= curr;
      return acc;
    }
    if (curr === 1) {
      acc += map[curr].repeat(num);
      return acc;
    }
    return acc;
  }, '');
};

console.log(intToRoman(3999));
