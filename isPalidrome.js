/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const a = String(x).split("").reverse().join("");

  if (a === String(x)) return true;

  return false;
};

const result = isPalindrome(121);

console.log(result);
