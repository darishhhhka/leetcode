const createCounter = function (init) {
  const oldValue = init;
  const increment = () => {
    return (init += 1);
  };

  const decrement = () => {
    return (init -= 1);
  };

  const reset = () => {
    init = oldValue;
    return oldValue;
  };
  return { increment, decrement, reset };
};
