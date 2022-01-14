/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const deleteDuplicates = function (head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

/**
 * 无序版
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const set = new Set();
  let curr = head;
  while (curr !== null && curr.next !== null) {
    if (set.has(curr.val)) {
      curr.next = curr.next.next;
    } else if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      set.add(curr.val);
      curr = curr.next;
    }
  }
  return head;
};
