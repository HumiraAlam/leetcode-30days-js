var once = function (fn) {
  let calls = 0;

  return function (...args) {
    calls++;
    if (calls > 1) {
      return undefined;
    }
    return fn(...args);
  };
};
