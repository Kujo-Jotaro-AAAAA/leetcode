const upAdjust = (arr) => {
  let childIdx = arr.length - 1;
  let parentIdx = Math.floor((childIdx - 1) / 2);
  let child = arr[childIdx];
  while (childIdx > 0 && child < arr[parentIdx]) {
    arr[childIdx] = arr[parentIdx];
    childIdx = parentIdx;
    parentIdx = Math.floor((parentIdx - 1) / 2);
  }
  arr[childIdx] = child;
};
