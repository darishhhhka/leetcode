// Для заданного объекта или массива  objвернуть компактный объект .

// Компактный объект  — это то же самое, что и исходный объект, за исключением удаления ключей, содержащих ложные значения. Эта операция применяется к объекту и всем вложенным объектам. Массивы считаются объектами, где индексы являются ключами. Значение считается ложным,  если Boolean(value)возвращает false.

// Вы можете предположить, что  objэто вывод  JSON.parse. Другими словами, это корректный JSON.

const compactObject = function (obj) {
  let res;
  if (!res) {
    if (Array.isArray(obj)) res = [];
    else res = {};
  }
  for (item in obj) {
    if (Array.isArray(obj[item])) {
      if (Array.isArray(obj)) {
        res.push([compactObject(obj[item])]);
      } else {
        res[item] = [compactObject(obj[item])];
      }
    }
    if (obj[item]) {
      res.push(obj[item]);
    }
  }
  return res;
};

const obj = { a: null, b: [false, 1] };
const obj1 = [null, 0, false, 1];
const obj2 = [null, 0, 5, [0], [false, 16]];
const co = compactObject(obj);
console.log(co);
