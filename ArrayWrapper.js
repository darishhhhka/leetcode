// Создайте класс  ArrayWrapper, принимающий в конструкторе массив целых чисел. Этот класс должен обладать двумя особенностями:

// При сложении двух экземпляров этого класса с помощью  + оператора результирующее значение представляет собой сумму всех элементов обоих массивов.
// При  String() вызове функции для экземпляра она вернёт строку, разделённую запятыми и заключённую в скобки. Например, [1,2,3].

const ArrayWrapper = function (nums) {
  this.arr = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.arr.reduce((cur, acc) => acc + cur, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.arr}]`;
};

const arr1 = new ArrayWrapper([1, 2, 3]);
const arr2 = new ArrayWrapper([2, 3, 4]);
console.log(arr1);

console.log(arr1 + arr2);
console.log(String(arr1));
