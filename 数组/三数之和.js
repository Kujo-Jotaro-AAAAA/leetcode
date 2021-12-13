/*
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。
示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

示例 2：
输入：nums = []
输出：[]

示例 3：
输入：nums = [0]
输出：[]
*/
/**
 * 解答:
 * 1. 将数组按顺序排列
 * 2. 定义两个指针: left = i + 1, right = len - 1
 * 3. 如果当前位置的值 + left指针的值 + right指针的值 为0 , 则push进结果
 * 4. 结果 < 0, 左指针++, > 0 右指针 --
 * 5. 处理重复数字的情况
 * 6. 已排序且当前的值已经>0, 则跳出不处理
 * 7. 数组的第二位开始, 如果跟前一位值相同, 则结束此次循环，执行下一次循环
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!Array.isArray(nums) || nums.length < 3) return [];
  nums.sort();
  let ans = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let left = i + 1,
      right = len - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else if (sum > 0) right--;
    }
  }
  return ans;
};
const nums = [0, 0, 0, 0, 0, 0];
// const nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
