/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 1) {
    return ["()"];
  }
  if (n === 2) {
    return ["(())", "()()"];
  }
  let set = new Set();
  let prev = generateParenthesis(n - 1);
  for (let i = 0; i < prev.length; i++) {
    if (!set.has('(' + prev[i] + ')')) {
      set.add('(' + prev[i] + ')');
    }
  }
  for (let i = 0; i < prev.length; i++) {
    if (!set.has('()' + prev[i])) {
      set.add('()' + prev[i]);
    }
  }
  for (let i = 0; i < prev.length; i++) {
    if (!set.has(prev[i] + '()')) {
      set.add(prev[i] + '()');
    }
  }

  if ((n % 2) === 0) {
    let prev = generateParenthesis(n / 2);
    for (let i = 0; i < prev.length; i++) {
      if (!set.has(prev[i] + prev[i])) {
        set.add(prev[i] + prev[i]);
      }
    }
  }

  console.log(set);
  return Array.from(set);
};

generateParenthesis(5);
