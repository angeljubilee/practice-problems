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
 * @return {boolean}
 */
// let counter = 1
// add branches onto queue
// while stack is not empty
//   check if palidrone for (counter * 2) items
//   return false
//   add sub nodes to queue
// return true at end of the loop

var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  if (!root.left && !root.right) {
    return true;
  }

  let size = 2;
  let queue = [];
  queue.push(root);
  queue.push(root.left);
  queue.push(root.right);

  let start = 1;
  while (queue.length) {
    for (let i = start; i < queue.length / 2; i++) {
      if (!queue[i] && queue[queue.length - 1 - i]) {
        return false;
      }
      if (queue[i] && !queue[queue.length - 1 - i]) {
        return false;
      }
      if (queue[i].val !== queue[queue.length - 1 - i].val) {
        return false;
      }
    }
    // Add sub nodes
    for (let i = start; i < queue.length; i++) {
      if (queue[i]) {
        queue.push(queue[i].left);
        queue.push(queue[i].right);
      }

    }
    start = start + size;
    size *= 2;
  }

  return (true);

};
