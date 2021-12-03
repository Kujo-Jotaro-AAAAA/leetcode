/*
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

*/

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
/*
解1， 性能太差
let maxArea = function(heights) {
	let max = 0
	for (let i = 0; i < height.length; i++) {
		let h = height[i]
		for (let j = i; j < height.length; j++) {
			let w = j - i,
			a = Math.min(h, height[j])
			max = Math.max(w * a, max)
			// console.log({w, h, r : w * a})
		}
	}
	return max
};
maxArea(heights)
*/

/*
  	头尾指针, 相遇时计算完毕
	宽度: j - i
	Math.max: 保留最大面积
	高度: height[指针], 谁短谁就向内移动

*/

let maxArea = function (heights) {
  let head = 0,
    tail = heights.length - 1,
    res = 0;
  while (head < tail) {
    res =
      heights[head] < heights[tail]
        ? Math.max(res, (tail - head) * heights[head++])
        : Math.max(res, (tail - head) * heights[tail--]);
  }
  return res;
};
maxArea(heights);
