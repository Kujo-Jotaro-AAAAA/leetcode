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

// public int sumNumbers(TreeNode root) {
//   return helper(root, 0);
// }

// public int helper(TreeNode root, int i){
//   if (root == null) return 0;
//   int temp = i * 10 + root.val;
//   if (root.left == null && root.right == null)
//       return temp;
//   return helper(root.left, temp) + helper(root.right, temp);
// }

// 解法2
var sumNumbers = function (root) {
  const dfs = (node, i) => {
    if (node == null) return 0;
    // 前序遍历访问根节点时, 要乘十
    i = i * 10 + node.val;
    // 乘十的原因: 比如上个节点是3, 当前节点是2, 组合为32。
    // 则需要将上个节点变为十位数
    if (!node.left && !node.right) return i;
    return dfs(node.left, i) + dfs(node.right, i);
  };
  return dfs(root, 0);
};
