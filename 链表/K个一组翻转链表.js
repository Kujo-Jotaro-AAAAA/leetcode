/**
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * k 在链表长度范围内
 * 举例: 当k为2时, 则两个节点为一组进行反转
 */
var reverse = function (head) {
  const newNode = new ListNode();
  let curr = null;
  while (head) {
    curr = head;
    head = head.next;
    curr.next = newNode.next;
    newNode.next = curr;
  }
  return newNode.next;
};
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 快慢指针？ 递归
 */
var reverseKGroup = function (head, k) {};
