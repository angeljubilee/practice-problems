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
  // let arr = [];
  // a = headA;
  // b = headB;

  // console.log('here');
  // while (a || b) {

  //   if (arr.includes(a)) {
  //     return a;
  //   }
  //   arr.push(a);
  //   return b;
  // }
  // arr.push(b);
  // a = a.next;
  // b = b.next;

  let sizeA = 0;
  let sizeB = 0;
  let iterA = headA;
  let iterB = headB;

  while (iterA) {
    sizeA++;
    iterA = iterA.next;
  }

  while (iterB) {
    sizeB++;
    iterB = iterB.next;
  }

  iterA = headA;
  iterB = headB;

  for (let i = 0; i < Math.abs(sizeA - sizeB); i++) {
    (sizeA > sizeB) ? iterA = iterA.next : iterB = iterB.next;
  }

  while (iterA && iterB) {
    if (iterA === iterB) {
      return (iterA);
    }
    iterA = iterA.next;
    iterB = iterB.next;
  }
  return null;
};
