// Дан массив arrи функция fn, вернуть отсортированный массив sortedArr. Можно предположить, что  fn функция возвращает только числа, и эти числа определяют порядок сортировки  sortedArr. sortedArrНеобходимо отсортировать по возрастанию выходныхfn данных.

// Вы можете предположить, что fnв данном массиве числа никогда не будут повторяться.

const sortBy = function (arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) - fn(b);
  });
};

const arr = [5, 2, 3, 4, 5];
const fn = (x) => {
  return x;
};

const arr1 = [{ x: 1 }, { x: 0 }, { x: -1 }];
const fn1 = (d) => d.x;

console.log(sortBy(arr1, fn1));
