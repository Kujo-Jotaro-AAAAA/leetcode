/**
 * @param {number[]} digits
 * @return {number[]}
 */
const digits = [9];
var plusOne = function (digits) {
  let len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (i === len - 1) {
      digits[i]++;
    }
    if (digits[i] > 9) {
      if (digits[i - 1] !== undefined) {
        digits[i - 1]++;
        digits[i] %= 10;
      } else {
        // 前置位为空
        digits[i] %= 10;
        digits.unshift(1);
      }
    }
  }
  return digits;
  // if (digits[digits.length - 1] < 9) {
  //   digits[digits.length - 1]++;
  // } else {
  //   digits = `${Number(digits.join("")) + 1}`.split("");
  // }
  // return digits;
};
plusOne(digits);
