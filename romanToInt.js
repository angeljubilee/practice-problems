/**
 * @param {string} s
 * @return {number}
 */
// Use a hash map to store values
// Loop through string
//   If value of key > previous value, subtract previous value from ans
//   Else add value of key onto answer
var romanToInt = function (s) {
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let ans = 0;
  ans += map[s[0]];
  for (let i = 1; i < s.length; i++) {
    ans += map[s[i]];
    if(map[s[i]] > map[s[i - 1]]) {
      ans -= map[s[i-1]] * 2;
    }
  }
  console.log(ans);
  return ans;
};

romanToInt("MCMXCIV");
romanToInt("LVIII");
