/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const sArr = [...s].sort();
  const tArr = [...t].sort();
  // return tArr.reduce((acc, letter, idx) => {
  //     if (letter !== sArr[idx]) {
  //         tArr.splice(1);
  //         return letter;
  //     }
  //     return acc;
  // }, '');
  const result = sArr.reduce((acc, letter, idx) => {
    if (letter !== tArr[idx]) {
      return letter;
    }
    return acc;
  }, '');

  return result || tArr[tArr.length - 1];
};
