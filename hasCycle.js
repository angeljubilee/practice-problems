/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head.next;
  while (slow && fast) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    }
  }
  return false;

  // let arr = [];
  // let pos = 0;
  // let node = head;
  // while (node.next) {
  //   if (arr.includes(node.next)) {
  //     return true;
  //   }
  //   arr.push(node.next);
  //   node = node.next;
  // }
  // return false;

};
