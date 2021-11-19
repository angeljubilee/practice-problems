/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // const cache = {};
  // const result = [];
  // numbers.forEach((num,idx) => {
  //     const difference = target - num;
  //     if (cache[difference] ) {
  //         result.push(cache[difference], idx + 1);
  //     } else {
  //         cache[num] = idx + 1;
  //     }
  // });
  // return result;

  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    }
    if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
};
