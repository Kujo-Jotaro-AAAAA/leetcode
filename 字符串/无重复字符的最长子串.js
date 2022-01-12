/**
 * 输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
var s = "bbbbb";
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
      windowIndex + 1 < s.length &&
      !strSet.has(s.charAt(windowIndex + 1))
    ) {
      strSet.add(s.charAt(windowIndex + 1));
      ++windowIndex;
    }
    ans = Math.max(ans, windowIndex - i + 1);
  }
  return ans;
};
lengthOfLongestSubstring(s);
