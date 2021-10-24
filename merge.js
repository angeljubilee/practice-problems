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
  let i = 0; let j = 0;

  while (j < nums2.length) {
    if (nums1[i] === 0) {
      nums1[i] = nums2[j];
      i++; j++;
      continue;
    }
    if (nums2[j] < nums1[i]) {
      let temp = nums1[i];
      nums1[i] = nums2[j];
      nums2[j] = temp;
      i++;
      continue;
    }
    i++;
  }
};
