/**
 * 
给你两个 非空 的链表，表示两个非负的整数。
它们每位数字都是按照 逆序 的方式存储的，
并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1 - [2,4,3]
 * @param {ListNode} l2 - [5,6,4]
 * @return {ListNode} - [7, 0 ,8]
 */
var addTwoNumbers = function (l1, l2) {
  let pre = new ListNode(0),
    curr = pre,
    carry = 0;
  while (l1 !== null || l2 !== null) {
    let x = l1?.val ?? 0,
      y = l2?.val ?? 0,
      sum = x + y + carry;
    carry = sum >= 10 ? 1 : 0;
    sum %= 10;
    curr.next = new ListNode(sum);
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry === 1) {
    curr.next = new ListNode(carry);
  }
  return pre.next;
};

/**
解析: 双指针 + 补0的技巧

对于要返回一个链表的题, 可以无脑尝试预指针存放法。
预指针的头节点就是要返回的链表，如果不行再说别的。

因为进位最多在 9 + 9的范围, 进位肯定不超过 1。
所以声明一个变量存放, 超过10则为1, 否则为0

开始循环, 当l1或者l2都为null时结束。

l1 和 l2 如果有值则指针不停的往下走, 当前l1 l2指针的值任一为null则视为 0 

注意: 当循环结束, carry还是为1, 则表明最后一位也需进1。

这题对于基础较差同学(特别是没有其他语言基础的人)的难点应该是怎么去生成新的链表节点, 也就是这一步操作

curr.next = new ListNode(sum)


 */
