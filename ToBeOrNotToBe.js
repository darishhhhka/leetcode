const expect = function (value1) {
  const toBe = (value2) => {
    if (value1 === value2) {
      return true;
    }
    throw new Error("Not Equal");
  };

  const notToBe = (value2) => {
    this.value = value2;
    if (value1 !== value2) {
      return true;
    }
    throw new Error("Equal");
  };

  return { toBe, notToBe };
};

console.log(expect(10).toBe(null));
