/**
 * @param {string} s
 * @return {boolean}
 */
/*  Loop through string, lowercase char, ignore all non alphanumeric chars
*   Compare first char to last char and continue until reaching the middle
*/
var isPalindrome = function (s) {
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-zA-Z0-9]/g)) {
      str += s[i].toLocaleLowerCase();
    }
  }
  console.log(str);
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
