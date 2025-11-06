// Учитывая массив arrи размер фрагмента size, вернуть фрагментированный массив.

// Массив , разбитый на фрагменты, содержит исходные элементы в arr, но состоит из подмассивов, каждый из которых имеет длину size. Длина последнего подмассива может быть меньше , sizeесли arr.lengthне делится нацело на size.

// Пожалуйста, решите эту задачу, не используя функцию lodash _.chunk.

const chunk = function (arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};

const obj = chunk([1, 2, 3, 4, 5], 3);
console.log(obj);

obj.forEach((el) => console.log(el));
