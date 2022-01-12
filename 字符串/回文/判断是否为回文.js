// 转换类型写法
// function isPali(num){
// 	return `${num}` === Array.prototype.reverse.apply(`${num}`.split("")).join("")
// }

/**
 * 不转换类型判断回文
 * 倒转后半截的数字
 * @param {*} x
 */
const isPali = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  let reserve = 0;
  while (x > reserve) {
    reserve = reserve * 10 + (x % 10); 
    // 12 * 10 + 2 => 120 + %后的最后一个数
    x = Math.floor(x / 10);
    console.log(x)
  }
  return x === reserve || x === Math.floor(reserve / 10);
};
isPali(12321)