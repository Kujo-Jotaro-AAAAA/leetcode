/**
	给你两个整数数组 nums1 和 nums2 ，
	请你以数组形式返回两数组的交集。
	返回结果中每个元素出现的次数，
	应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。
	可以不考虑输出结果的顺序。

	示例 1：
	输入：nums1 = [1,2,2,1], nums2 = [2,2]
	输出：[2,2]

	示例 2:
	输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
	输出：[4,9]

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const nums1 = [1,2,2,1], nums2 = [1,1];
var intersect = function(nums1, nums2) {
	const map = new Map(), res = []
	for (var i = 0; i < nums1.length; i++) {
		if (map.get(nums1[i]) !== undefined) {
			map.set(nums1[i], map.get(nums1[i]) + 1)
		} else {
			map.set(nums1[i], 1)
		}
	}
	for (var i = 0; i < nums2.length; i++) {
		if (map.get(nums2[i])!== undefined && map.get(nums2[i]) > 0) {
			res.push(nums2[i])
			map.set(nums2[i], map.get(nums2[i]) - 1)
		}
	}
	return res
};
console.log(intersect(nums1, nums2))





