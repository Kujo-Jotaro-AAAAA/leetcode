// 原地删除数组中所有传入值相等的数字
var removeElement = function(nums, val) {
	let i = 0;
	while(i < nums.length) {
		if (nums[i] === val) {
			nums.splice(i, 1)
			continue
		}
		i ++
	}
	return nums.length
};
console.log(removeElement([2,2,3,3], 3))