/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

/* Take the midpoint and make it the root node
   Call sortedArray on the left and right parts of the array
   Set root.left and root.right to the return
*/
var sortedArrayToBST = function(nums) {
  if(!nums.length) {
    return null;
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  const mid = Math.floor(nums.length/2);

  let left = sortedArrayToBST(nums.slice(0, mid));
  let right = sortedArrayToBST(nums.slice(mid + 1));

  return new TreeNode(nums[mid], left, right);

};
