/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let rMap = {};
  let mMap = {};
  for (let i = 0; i < ransomNote.length; i++) {
    if (rMap[ransomNote[i]]) {
      rMap[ransomNote[i]]++;
    } else {
      rMap[ransomNote[i]] = 1;
    }
  }
  for (let i = 0; i < magazine.length; i++) {
    if (mMap[magazine[i]]) {
      mMap[magazine[i]]++;
    } else {
      mMap[magazine[i]] = 1;
    }
  }

  let keys = Object.keys(rMap);
  for (let k = 0; k < keys.length; k++) {
    if (!mMap[keys[k]]) {
      return false;
    }
    if (rMap[keys[k]] > mMap[keys[k]]) {
      return false;
    }
  }
  return true;
};
