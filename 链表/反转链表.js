/**
 * 假设已经定义了一个单链表构造函数
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 1. 生成一个新的链表用来存放反转的链表
// 2. 遍历原链表`head`
// 3. 在单个循环中需要执行:
//   用一个临时空间存储当前链表的位置
//   将当前链表的`next`赋值反转的链表的`next`
//   移动head指针操作

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const newNode = new ListNode(); // 用于存储新的链表
  let curr = null;
  while (head) {
    curr = head;
    head = head.next; // 向下移动

    // 互相交换当前的head值和之前的head值
    curr.next = newNode.next;
    newNode.next = curr;
  }
  return newNode.next;
};
