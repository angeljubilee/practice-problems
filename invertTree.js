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
 * @return {TreeNode}
 */

// Swap left and right
// Call invertTree on left and right
// return root
var invertTree = function (root) {
  if (!root) {
    return root;
  }
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  if (root.left) {
    invertTree(root.left);
  }

  if (root.right) {
    invertTree(root.right);
  }

  return root;
};
