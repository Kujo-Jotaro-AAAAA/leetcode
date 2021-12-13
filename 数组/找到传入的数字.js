const matrix = [[1]],
  target = 13;

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let x = matrix[0].length - 1,
    y = 0,
    res = false;
  while (x > -1 && y < matrix.length) {
    if (matrix[y][x] === undefined) {
      y++;
      continue;
    }
    if (matrix[y][x] > target) {
      x--;
      y = 0;
    } else if (matrix[y][x] < target) {
      y++;
    } else if (matrix[y][x] === target) {
      res = true;
      break;
    }
  }
  return res;
};
searchMatrix(matrix, target);
