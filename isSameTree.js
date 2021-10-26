/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// If values don't match return false
// If both are terminal nodes, and value match return true
var isSameTree = function (p, q) {
  console.log('top');
  if (!p && !q) {
    return true;
  }

  if ((p && !q) || (q && !p)) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  if (!p.left && !p.right && !q.left && !q.right &&
    p.val === q.val) {
    return true;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
