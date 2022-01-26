/**
 * @param {number[]} prices
 * @return {number}
输入：[7,1,5,3,6,4]
输出：5
暴力解法, 提交超时
 */
var maxProfit = function (prices) {
  // let buy = 0;
  let r = 0;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const comparePrice = prices[j];
      r = Math.max(comparePrice - price, r);
    }
  }
  return r;
};

var maxProfit = function (prices) {
  let max = 0;
  let minprice = prices[0]; // 买入价
  let len = prices.length;
  for (let i = 0; i < len; i++) {
    if (prices[i] < minprice) {
      // 如果买入价比当前的价还小，则置换
      minprice = prices[i];
    } else if (prices[i] - minprice > max) {
      // 当前价格 - 买入价 如果收益比max高, 置换收益的值
      max = prices[i] - minprice;
    }
  }
  return max;
};
console.log(maxProfit([5, 9, 1, 6, 3, 1]));
