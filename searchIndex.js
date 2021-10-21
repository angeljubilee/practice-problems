/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Initial window = start index to end
// run loop
// Get midpoint of window,
//  check if target is = to midpoint, return index
//  if start === end, return start
//  if target is > midpoint, update start to midpoint to end
//  else update start to 0 to midpoint

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  if (target < nums[0]) {
    return 0;
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  if (target === nums[0]) {
    return 0;
  }

  while ((end - start) > 1) {
    let mid;
    mid = start + Math.floor((end - start + 1) / 2);
    console.log(mid);
    if (target === nums[mid]) {
      return mid;
    }
    if (target > nums[mid]) {
      start = mid;
    } else {
      end = mid
    }
  }
  return start + 1;
};
