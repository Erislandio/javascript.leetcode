/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let value = 0;
  let prevValue = 0;

  const map = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

  const nums = s.toLowerCase().split("");

  for (let index = nums.length - 1; index >= 0; index--) {
    const currentValue = map[nums[index]];

    if (currentValue < prevValue) {
      value -= currentValue;
    } else {
      value += currentValue;
    }

    prevValue = currentValue;
  }
  return value;
};
