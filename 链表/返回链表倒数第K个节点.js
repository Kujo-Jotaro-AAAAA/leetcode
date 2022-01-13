/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let curr = head,
    num = 0,
  while (curr !== null) {
    curr = curr.next;
    num++;
  }
  curr = head
  num -= k;
  while (num--) {
    curr = curr.next;
  }
  return curr;
};
