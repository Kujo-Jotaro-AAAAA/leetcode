// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
// 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
/*
解析: 
先将数组按顺序排好，
如果nums[i]已在正确位置。
则跳过继续下一个位置替换。
最后，当当前位置的数字！==下标+1，则标识范围内没有，添加进res
*/
const list = [4, 3, 7, 2];
// const list = [1, 1];
var findDisappearedNumbers = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === i + 1) {
      i++;
      continue;
    }
    const correctIdx = nums[i] - 1;
    if (nums[i] === nums[correctIdx]) {
      i++;
      continue;
    }
    [nums[correctIdx], nums[i]] = [nums[i], nums[correctIdx]];
  }
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      res.push(i + 1);
    }
  }
  return res;
};

// var findDisappearedNumbers = function (nums) {
//   let i = 0
//   const res = []
//   while (i < nums.length) {
//     if (nums.incudles(i + 1)) {
//       res.push(i + 1)
//     }
//     i ++
//   }
//   return res
// };
// console.log(findDisappearedNumbers(list))

/*
             ┌───────┐     ┌───────┐     ┌───────┐                           ┌───────┐
   .─.       │       │     │       │     │       │       .─.       .─.       │       │
  ;   :      │       │     │       │     │       │      ;   :     ;   :      │       │
  :   ;      │   2   │     │   3   │     │   4   │      :   ;     :   ;      │   7   │
   ╲ ╱       │       │     │       │     │       │       ╲ ╱       ╲ ╱       │       │
    '        │       │     │       │     │       │        '         '        │       │
             └───────┘     └───────┘     └───────┘                           └───────┘
                                                                                      
                                                                                      
                                                                                      
┌───────┐    ┌───────┐    ┌───────┐     ┌───────┐                                     
│       │    │       │    │       │     │       │                                     
│       │    │       │    │       │     │       │                                     
│   1   │    │   2   │    │   3   │     │   4   │                                     
│       │    │       │    │       │     │       │                                     
│       │    │       │    │       │     │       │                                     
└───────┘    └───────┘    └───────┘     └───────┘                                     

*/
