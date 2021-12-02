/*
要求: 
不额外开辟内存空间
返回结果数组的length
*/
var removeDuplicates = function(nums) {
	// 解1
	// let i = 0;
	// while(i < nums.length) {
	// 	if (nums.slice(0,i).includes(nums[i])) {
	// 		nums.splice(i, 1)
	// 		continue;
	// 	}
	// 	i ++
	// }
	// return nums.length

	// 解2
	let start = nums[0], i = 1
	while(i <= nums.length) {
		if (nums[i] - start < 1) {
			nums.splice(i, 1)
			continue
		}
		start = nums[i]
		i ++
	}
	return nums.length
};

console.log(removeDuplicates([0,0,0,3]))

