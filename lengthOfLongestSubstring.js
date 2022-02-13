/**
 * @param {string} s
 * @return {number}
 */
// Make a map
// let map = {}
// let sub = '';
// let max
// Loop through s
//   If char already in map, clear
//   else add char to map and sub
//   Update max if sub is greater
// Return max
var lengthOfLongestSubstring = function (s) {
  let map = {}
  let start = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] >= 0) {
      start = Math.max(start, map[s[i]] + 1);
      map[s[i]] = i;
    } else {
      map[s[i]] = i;
    }

    /*  console.log('i,', i);
      console.log('start', start);
      console.log(map);
    */

    max = Math.max(max, i - start + 1);
  }
  return max;
};
