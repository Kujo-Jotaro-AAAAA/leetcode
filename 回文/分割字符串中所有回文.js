let str = "abba";
var partition = function (s) {
  const result = [];
  function dfs(temp, start) {
    if (start === s.length) {
      result.push(temp.slice());
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (isPali(s, start, i)) {
        temp.push(s.substring(start, i + 1));
        dfs(temp, i + 1);
        temp.pop();
      }
    }
  }
  dfs([], 0);
  return result;
};
function isPali(str, start, end) {
  while (start < end) {
    if (str[start] != str[end]) return false;
    start++;
    end--;
  }
  return true;
}
const r = partition(str);
// console.log(r);

/**
0: (4) ['a', 'b', 'b', 'a']
1: (3) ['a', 'bb', 'a']
2: ['abba']
 */
