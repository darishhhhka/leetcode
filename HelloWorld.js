const createHelloWord = function () {
  return function (...args) {
    return "Hello World";
  };
};

console.log(createHelloWord([]));
