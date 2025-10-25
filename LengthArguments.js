// Напишите функцию  argumentsLength, которая возвращает количество переданных ей аргументов.

const argumentsLength = function (...args) {
  return args.length;
};

const arg = argumentsLength({}, 3, []);
console.log(arg);
