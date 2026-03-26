/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const num = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    console.log("complement", complement);

    if (num.has(complement)) {
      return [num.get(complement), i];
    }
    num.set(nums[i], i);
  }

  return [];
};

const response = twoSum([2, 7, 11, 15], 9);

console.log(response);
