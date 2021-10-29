/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

  let max_area = 0;

  let start = 0;
  let end = height.length - 1;

  while (start < end) {

    area = (end - start) * Math.min(height[start], height[end]);
    console.log(area);

    max_area = Math.max(max_area, area);

    (height[start] > height[end]) ? end-- : start++;
  }
  return max_area;
};
