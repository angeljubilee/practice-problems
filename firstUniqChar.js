/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]].count++;
    } else {
      map[s[i]] = {
        count: 1,
        index: i
      }
    }
  }
  let keys = Object.keys(map);
  for (let k = 0; k < keys.length; k++) {
    if (map[keys[k]].count === 1) {
      return map[keys[k]].index;
    }
  }
  return -1;

};
