/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Loop through num2, starting from the end of num2 and end of num1
//  if nums1[i] > num2[j], move num1[i] to end of num1 - num2[length] - j
//    decrement i
//    continue;
//  If nums2[j] > nums1[i], move num2[j] to end of num1 - num2[length] - j
//    decrement j
//    continue;
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let end = m + n - 1;

  while (end >= 0) {
    if (i < 0) {
      nums1[end] = nums2[j];
      console.log(nums1);
      j--;
      end--;
      continue;
    }

    if (nums2[j] > nums1[i]) {
      nums1[end] = nums2[j];
      j--;
    } else {
      nums1[end] = nums1[i];
      i--;
    }
    end--;
  }
  console.log(nums1);
};
