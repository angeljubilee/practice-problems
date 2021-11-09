/**
 * @param   {array of chars} set
 * @param   {number} pos
 * @param   {number} N
 * @param   {number} counter
 * @param   {array} ans
 * @return  {void}
 */
const helper = function (set, pos, N, counter, ans) {

  console.log('Top of helper');
  console.log(set);
  console.log(pos, N, counter);
  //base case, if we have a full set (all positions has a char in it)
  if (pos === N) {
    //check if the set is valid, the counter should be 0, each '(' increment the counter and each ')' decrement it
    //if the set is correct, convert the array to string and store it in the ans array
    if (counter === 0) ans.push(set.join(""));

    if (counter === 0) console.log(ans);

    //exit recursion
    return;
  }
  //check if the counter is not negative, a negative number means the string starts with ')' or we have more ')' than '('
  if (counter >= 0) {
    //explore the options filling the set using recursion
    set[pos] = "(";
    //first set the set[pos] = "(" and call again recursively increasing the counter of symbols
    console.log('Calling helper 1')
    helper(set, pos + 1, N, counter + 1, ans);

    //Now return from the previous call
    console.log('Calling helper 2')
    set[pos] = ")";
    //and set the set[pos] = ")" and call again recursively decreasing  the counter of symbols
    helper(set, pos + 1, N, counter - 1, ans);
  }
};
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  //create an array of size 2*n where n is the number of pairs
  let set = new Array(2 * n).fill("");
  //create the array that will store the correct answers
  let ans = new Array();
  //call the recursive function
  helper(set, 0, 2 * n, 0, ans);
  //return the answer
  return ans;
};

generateParenthesis(3);
