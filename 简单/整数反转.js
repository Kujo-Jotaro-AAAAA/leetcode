const intNum = 123456;
function reserve(num) {
  if (num === 0) return 0;
  if (num > 0) {
    return Number(
      Array.prototype.reverse.apply(String(num).split("")).join("")
    );
  }
  return -Number(
    Array.prototype.reverse.apply(String(num).substring(1).split("")).join("")
  );
}
reserve(intNum);
