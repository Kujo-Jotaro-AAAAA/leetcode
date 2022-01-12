/**
 * 输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
var s = "abcabcbb";
var lengthOfLongestSubstring = (s) => {
  if (!s) return 0;
  var ans = 0,
    windowIndex = -1, // 指针一定从 - 1开始, 否则结果会多1
    strSet = new Set();
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      strSet.delete(s.charAt(i - 1));
    }
    while (
      // 在字符长度边界内, 且set里面不存在此字符时不停的循环
      windowIndex + 1 < s.length &&
      !strSet.has(s.charAt(windowIndex + 1))
    ) {
      // 将他添加到set并windowIndex计数+1
      strSet.add(s.charAt(windowIndex + 1));
      ++windowIndex;
    }
    // 比对 windowIndex计数 跟当前遍历下标的距离
    ans = Math.max(ans, windowIndex - i + 1);
  }
  return ans;
};
lengthOfLongestSubstring(s);
/**
 * "abcabcbb"
 * 就像手写记录, 每次循环拿到最长的不重复字符串, 下次循环去掉当前循环前一个字符
 * set: abc -> bca -> cab -> abc -> cb -> b -> b
 * windowIndex + 1: 3 -> 3 -> 3 -> 3 -> 2 -> 1 -> 1
 * ans: 3 -> 3 -> 3 -> 3 -> 3 -> 3 -> 3 -> 3 -> 3
 */
