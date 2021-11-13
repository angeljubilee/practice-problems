/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let z = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && z === null) {
      z = i;
    } else if (nums[i] !== 0 && z !== null) {
      nums[z] = nums[i];
      nums[i] = 0;
      z++;
    }
  }
};
