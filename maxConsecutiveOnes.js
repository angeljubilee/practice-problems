/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // create variable for maxNumber
  let maxNumber = 0;
  let currentSequence = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentSequence++;
    } else {
      currentSequence = 0;
    }
    if (currentSequence > maxNumber) {
      maxNumber = currentSequence;
    }
  }

  return maxNumber;
};
