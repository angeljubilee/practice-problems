/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let skippedChars = false;
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      skippedChars = true;
      i++;
    } else {
      answer += s[i];
    }
  }

  console.log(answer);

  if (skippedChars) {
    return removeDuplicates(answer);
  }
  return answer;

};
