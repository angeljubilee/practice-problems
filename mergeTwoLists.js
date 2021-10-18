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
/*
  Have two iterators, one for l1, one for l2
  Make another iterator for the merged list
  Compare l1 val to l1 val
  Splice the smaller value onto the merged list
  Continue until the end of both lists
*/
var mergeTwoLists = function (l1, l2) {
  let currL1Node = l1;
  let currL2Node = l2;
  let mergedNode = null;
  let currMergedNode;

  if (!l1 && !l2) {
    return l1;
  }

  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  if (l1.val <= l2.val) {
    mergedNode = l1;
    currL1Node = currL1Node.next;
  } else {
    mergedNode = l2;
    currL2Node = currL2Node.next;
  }
  currMergedNode = mergedNode;

  while (currL1Node || currL2Node) {
    if (!currL2Node ||
      (currL1Node && currL1Node.val <= currL2Node.val)) {
      currMergedNode.next = currL1Node;
      currL1Node = currL1Node.next;
    } else {
      currMergedNode.next = currL2Node;
      currL2Node = currL2Node.next;
    }
    currMergedNode = currMergedNode.next;
  }
  return mergedNode;
};
