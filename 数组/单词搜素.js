/**
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
如果 word 存在于网格中，返回 true ；否则，返回 false 。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，
其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
同一个单元格内的字母不允许被重复使用。
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
 */
var board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED",
  boardWordX = ["ABCE", "SFCS", "ADEE"],
  boardWordY = ["ASA", "BFD", "CCE", "ESE"];
for (let i = word.length; i > 0; i--) {
  const iWord = word.substr(0, i);
  for (let j = 0; j < boardWordX.length; j++) {
    let jWord = boardWordX[j].substr(0, i);
    if (iWord === jWord) {
      for (let z = boardWordY[jWord.length - 1].length; z >= 0; z--) {
        const zWord = boardWordY[jWord.length - 1].substr(0, z);
        let res = word.substr(z, word.length - 1);
        console.log({ zWord, res });
        if (zWord === res) {
          console.log("成功");
        }
      }
    }
  }
}
/**
 * 匹配传入数组和字符串的对应方向上已匹配的结果
 * 如有则返回对应的下标
 * @param {Array[][]} board
 * @param {string} str
 * @param {'t'|'b'|'l'|'r'} dir
 * @returns {number} idx
 */
function regStr(board, str, dir) {}
