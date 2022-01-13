/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
解释：等于目标和的根节点到叶节点路径如上图所示。

 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root == null) return false;
  /**
   *
   * @param {TreeNode} root
   * @param {Number} pathCount 路径值合计
   */
  const dfs = (root, pathCount) => {
    if (root == null) return false;
    if (root.left == null && root.right == null) {
      // 到达叶子节点,
      return root.val + pathCount === targetSum;
    }
    return (
      dfs(root.left, root.val + pathCount) ||
      dfs(root.right, root.val + pathCount)
    );
  };
  return dfs(root, 0);
};
