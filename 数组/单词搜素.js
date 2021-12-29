/**
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
如果 word 存在于网格中，返回 true ；否则，返回 false 。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，
其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
同一个单元格内的字母不允许被重复使用。
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
 */
/**
 * 解题:
 *
 * 1. 生成空的二维用来记录访问节点的路径
 * 2. 通过O(n²)来逐节点循环，且每次都从word的0开始
 * 3.实现寻找节点函数
 *
 * - 核心代码
 *
 * 3.1 先将当前节点置为true
 * 3.2 递归查找当前节点的上下左右四个方向
 * 3.3 如果都不行，将当前节点对应的路径重置为false,并return false
 * 3.3.1 如可以，return true
 *
 * - 边际校验
 *
 * 3.4 如要查找的字符超出文字长度, return true
 * 3.4.1 行与列的下标超出矩阵， return false
 * 3.4.2 当前节点之前已经设置过或不是匹配的文字， return false
 */
console.clear();
var exist = (board, word) => {
  const m = board.length;
  const n = board[0].length;
  const used = new Array(m); // 二维矩阵used，存放bool值
  for (let i = 0; i < m; i++) {
    used[i] = new Array(n);
  }
  console.log("二维矩阵", used);
  // canFind 判断当前点是否是目标路径上的点
  const canFind = (row, col, i) => {
    // row col 当前点的坐标，i当前考察的word字符索引
    // 超出要找字符的长度了，结束递归
    if (i == word.length) {
      return true;
    }
    if (row < 0 || row >= m || col < 0 || col >= n) {
      // 超出二维矩阵的行、列结束递归
      return false;
    }
    if (used[row][col] || board[row][col] != word[i]) {
      // 当前点已经访问过，或，非目标点
      return false;
    }
    // 排除掉所有false的情况，当前点暂时没毛病，可以继续递归考察
    used[row][col] = true; // 记录一下当前点被访问了

    // 基于当前的点[row,col]找上下左右的点，只有有一个方向匹配，都算成功
    const canFindRest =
      canFind(row + 1, col, i + 1) ||
      canFind(row - 1, col, i + 1) ||
      canFind(row, col + 1, i + 1) ||
      canFind(row, col - 1, i + 1);

    if (canFindRest) {
      // 基于当前点[row,col]，可以为剩下的字符找到路径
      return true;
    }
    // 不能为剩下字符找到路径，返回false，撤销当前点的访问状态
    used[row][col] = false;
    return false;
  };

  for (let i = 0; i < m; i++) {
    // 遍历找起点，作为递归入口
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0] && canFind(i, j, 0)) {
        // 找到起点且递归结果为真，找到目标路径
        return true;
      }
    }
  }
  return false; // 怎么样都没有返回true，则返回false
};
const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "BCCF";
