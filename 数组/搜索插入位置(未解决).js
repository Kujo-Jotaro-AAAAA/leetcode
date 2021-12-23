/**
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 o(log n) 的算法。

 */

const nums = [1,3,5,6,8,9], target = 0;
// o(n) 解法
// var searchInsert = function(nums, target) {
// 	let i = 0
// 	while(i < nums.length) {
// 		if (target > nums[i]) {
// 			i ++
// 			continue
// 		}
// 		if (target <= nums[i]) {
// 			break
// 		}
// 	}
// 	// console.log(i)
// 	return i
// };
// searchInsert(nums, target)

/*
o(log n) 解法， 二叉查找
当left的指针 <= right指针时:
通过地板函数头尾取中位角标mid。
当nums[mid] === target时, 说明找到了。
如中位数小于target, 
那说明数字在右半边, 则头部指针指向mid, 
由于mid不等于目标，则left要+1。
反之亦然。
当循环结束仍未找到，则说明未在该数组范围内，直接返回left指针。
*/
var searchInsert = function(nums, target) {
	let left = 0, right = nums.length -1;
	while(left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (nums[mid] === target) {
			return mid
		} else if (nums[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return left
};
console.log(searchInsert(nums, target))