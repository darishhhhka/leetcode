var TimeLimitedCache = function () {
  this.val = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let id = setTimeout(() => {
    delete this.val[key];
    console.log("kes is deleted");
  }, duration);

  if (key in this.val) {
    console.log("key");
    clearTimeout(this.val[key][2]);
    this.val[key] = [value, duration, id];
    console.log(id);

    return true;
  }
  this.val[key] = [value, duration, id];

  return false;
};

TimeLimitedCache.prototype.get = function (key) {
  console.log(this.val);

  if (key in this.val) {
    return this.val[key][0];
  }
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.val).length;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 50)); // false
console.log(timeLimitedCache.set(1, 50, 100));
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
