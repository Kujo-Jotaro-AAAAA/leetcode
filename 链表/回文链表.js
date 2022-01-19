/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 这样解题数字超大时候不通过
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let num = 0;
  const isPali = (num) => {
    if (num < 0 || (num % 10 === 0 && num > 0)) return false;
    let reserve = 0;
    while (num > reserve) {
      reserve = reserve * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return reserve === num || num === Math.floor(reserve / 10);
  };
  while (head) {
    num = num * 10 + head.val;
    head = head.next;
  }
  return isPali(num);
};

// 题解2

var isPalindrome = function (head) {
  let nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }
  for (let i = 0, j = nums.length - 1; i++, j--; ) {
    if (nums[i] !== nums[j]) {
      return false;
    }
  }
  return true;
};
