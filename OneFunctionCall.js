// При наличии функции fnвернуть новую функцию, которая идентична исходной функции, за исключением того, что она вызывается  fn не более одного раза.

// При первом вызове возвращаемой функции она должна вернуть тот же результат, что и  fn.
// При каждом последующем вызове он должен возвращать  undefined.

const once = function (fn) {
  flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      return fn(...args);
    }
  };
};

let fn = (a, b, c) => a + b + c;

const one = once(fn);

console.log(one(1, 2, 3));
console.log(one(1, 2, 3));
console.log(one(1, 2, 3));
