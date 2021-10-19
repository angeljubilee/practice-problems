/**
 * @param {number[]} nums
 * @return {number}
 */
// Loop through nums
// maxSum = 0;
// localMax = -Infinity
// loop through nums
// localMax = max(nums[i], nums[i] + local_max)
// if (localMax > maxSum), set maxSum to localMax
// At end of the loop, return maxSum
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let runningSum = 0;
  for (let i = 0; i < nums.length; i++) {
    runningSum = Math.max(nums[i], runningSum + nums[i]);
    maxSum = Math.max(runningSum, maxSum);
  }
  return maxSum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSubArray([-2, 1, -3, 4])
maxSubArray([8, -19, 1, 20])
maxSubArray([1, 2])
