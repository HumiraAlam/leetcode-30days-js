var expect = function (val) {
  return {
    toBe: function (val1) {
      if (val !== val1) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function (val1) {
      if (val === val1) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};
