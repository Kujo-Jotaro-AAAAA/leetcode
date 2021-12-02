/*
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，
另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的要合并的元素个数 (0~n, 0~m)。
const nums1 = [1,2,3], nums2 = [4,5,6], m = 1, n = 2

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，
而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，
其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

*/

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

var merge = function(nums1, m, nums2, n) {
	const mergeList = [...nums1.slice(0, m), ...nums2.slice(0,n)].sort((a,b) => a - b)
	// console.log(mergeList)
	for (var i = 0; i < nums1.length; i++) {
		nums1[i] = mergeList[i]
	}
	return [...nums1.slice(0, m), ...nums2.slice(0,n)].sort((a,b) => a - b)
};
merge(nums1,m,nums2, n)