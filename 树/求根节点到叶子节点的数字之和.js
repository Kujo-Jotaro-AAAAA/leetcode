/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 是个前序遍历的变种
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;
  const dfs = (node, numStr) => {
    if (!node.left && !node.right) {
      // 叶子节点, 结束递归
      numStr += node.val;
      sum += Number(numStr);
      return;
    } else {
      // 先访问根
      numStr += node.val;
    }
    // 左
    if (node.left) dfs(node.left, numStr);
    // 右
    if (node.right) dfs(node.right, numStr);
  };
  dfs(root, "");
  return sum;
};
/**
    1
  2   3
  ==> 12 + 13 = 25
 */
