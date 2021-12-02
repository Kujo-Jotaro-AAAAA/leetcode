/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const nums = [1,5,2,3,6,1]
var containsDuplicate = function(nums) {
	const s = new Set()
	let i = 0
	let d = false
	while(i < nums.length) {
		if (s.has(nums[i])){
			d = true
			break
		}
		s.add(nums[i])
		i ++
	}
	return d
};
console.log(containsDuplicate(nums))