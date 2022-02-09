/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// let sum = 0
// while node
//  sum += numbers
//  new node = sum % 10
//  sum = sum / 10

var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let node1 = l1;
  let node2 = l2;
  let answer = null;
  let head = null;

  while (node1 || node2) {
    sum += (node1 === null) ? 0 : node1.val;
    sum += (node2 === null) ? 0 : node2.val;

    if (answer === null) {
      answer = {
        val: sum % 10,
        next: null
      };
      head = answer;
    } else {
      answer.next = {
        val: sum % 10,
        next: null
      }
    }

    sum = Math.floor(sum / 10);

    node1 = (node1 === null) ? null : node1.next;
    node2 = (node2 === null) ? null : node2.next;
    answer = (answer.next === null)
      ? answer
      : answer.next;
  }

  if (sum) {
    answer.next = {
      val: sum % 10,
      next: null
    }
  }
  return head;
};
