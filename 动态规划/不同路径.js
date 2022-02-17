/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let memo = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const dp = (x, y) => {
    if (x == 0 && y == 0) return 1;
    if (x < 0 || y < 0) return 0;
    if (memo[x][y] > 0) return memo[x][y];
    return (memo[x][y] = dp(x - 1, y) + dp(x, y - 1));
  };

  return dp(m - 1, n - 1);
};
console.log(uniquePaths(3, 2));
