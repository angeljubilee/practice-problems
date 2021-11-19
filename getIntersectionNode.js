/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let arr = [];
  a = headA;
  b = headB;

  console.log('here');
  while (a || b) {

    if (arr.includes(a)) {
      return a;
    }
    arr.push(a);
    return b;
  }
  arr.push(b);
  a = a.next;
  b = b.next;
}
};
