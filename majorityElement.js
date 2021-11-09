/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 1;
  let candidate = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    (candidate === nums[i]) ? count++ : count--;

  }
  return candidate;
};
