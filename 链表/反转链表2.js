/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
/**
 * left和right是从1开始计数的
  1. 创建一个预链表,next指针指向head
  2. 将指针指向需反转链表节点的起点
  3. 不停的将当前遍历到的节点挪到预节点.next的指针上
  4. 最终返回预节点.next
 */
var reverseBetween = function (head, left, right) {
  const dummy_node = new ListNode();
  dummy_node.next = head;
  let pre = dummy_node;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let curr = pre.next;
  for (let i = 0; i < right - left; i++) {
    let next = curr.next;
    curr.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return dummy_node.next;
};
