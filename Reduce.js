const reduce = function (nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }

  return result;
};

const reduceArray = reduce(
  [1, 2, 3, 4, 5],
  function (acc, cur) {
    return acc + cur;
  },
  0
);

console.log(reduceArray);
