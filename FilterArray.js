const filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

const filterArray = filter([1, 2, 34, 5, 5], function (n) {
  return n !== 5;
});

console.log(filterArray);
