/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
/*
   If root > targetSum, return false
   Add children to stack

*/
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  return hasPathSumR(root.left, root.val, targetSum) ||
    hasPathSumR(root.right, root.val, targetSum);

};


var hasPathSumR = function (root, currSum, targetSum) {

  if (!root) {
    return false;
  }
  const newCurrSum = root.val + currSum;


  if (!root.left && !root.right) {
    return newCurrSum === targetSum;
  }

  return hasPathSumR(root.left, newCurrSum, targetSum) ||
    hasPathSumR(root.right, newCurrSum, targetSum);
}
