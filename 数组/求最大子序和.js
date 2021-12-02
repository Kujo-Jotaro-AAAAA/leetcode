/*
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：找到数组中，连续的子数组中，最大的和。
比如例子最大是 4 + -1 + 2 + 1 = 6

解: 当sum > 0, 说明对结果有增益,则要加上当前的item
否则,直接=当前item
每次都跟当前结果比对, 在结果和当前合计中取最大值
*/
const nums = [-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
	let r = 0, 
	sum = nums[0]
	for (const item of nums) {
		if (sum > 0) {
			sum += item
		} else {
			sum = item
		}
		r = Math.max(r, sum)
	}
	return r
};
maxSubArray(nums)

