const map = function (arr, fn) {
  let result = [];
  console.log(arguments[2]);

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

const newMap = map([1, 2, 3, 4, 5], function (n) {
  return n + 1;
});

console.log(newMap);
