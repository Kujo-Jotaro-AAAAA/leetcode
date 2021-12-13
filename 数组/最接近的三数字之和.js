/**
 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。
 请你从 nums 中选出三个整数，使它们的和与 target 最接近。
返回这三个数的和。
假定每组输入只存在恰好一个解。

 示例 1：
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

示例 2：
输入：nums = [0,0,0], target = 1
输出：0

 */

/**
 * 双指针 + 排序
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let ans = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < len; i++) {
    let item = nums[i],
      left = i + 1,
      right = len - 1;
    while (left < right) {
      const sum = item + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        // 本次计算的距离比之前的小, 则记录
        ans = sum;
      } else if (sum > target) {
        // 把数字往小了找
        right--;
      } else if (sum < target) {
        // 把数字往大了找
        left++;
      } else {
        return ans;
      }
    }
  }
  return ans;
};
const nums = [1, 2, 4, 8, 16, 32, 64, 128],
  target = 82;
console.log("res ==>", threeSumClosest(nums, target));
