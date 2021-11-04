/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
  make map from s, t
   just use char from s as key, char from t as value
  new s = apply map to s
  return if new s = t
*/
var isIsomorphic = function (s, t) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = t[i];
  }

  let result = '';
  for (let i = 0; i < s.length; i++) {
    result += map[s[i]];
  }

  return result === t;
};
