/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * 倒数从1开始计数, 删完后返回修改过数据的原链表
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (n == 0) return head;
  let pre = new ListNode(0);
  pre.next = head;
  let fast = (slow = pre);
  while (n) {
    fast = fast.next;
    n--;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return pre.next;
};
