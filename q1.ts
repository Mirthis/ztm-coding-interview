// https://leetcode.com/problems/two-sum/description/
const sumTwoBrutal = (nums: number[], target: number): number[] | null => {
  for (let i = 0; i < nums.length; i++) {
    const numToFind = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === numToFind) {
        return [i, j];
      }
    }
  }
  return null;
};

const sumTwo = (nums: number[], target: number): number[] | null => {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
  return null;
};

const inputs: Array<{ values: Array<number>; target: number }> = [
  { values: [1, 3, 7, 9, 2], target: 11 }, // answer [3,4]
  { values: [1, 3, 7, 9, 2], target: 25 }, // answer null
  { values: [], target: 1 }, // answer null
  { values: [5], target: 5 }, // answer null
  { values: [1, 6], target: 7 }, // answer [0,1]
];

console.log("Brute Force approach");
inputs.forEach((input) => {
  console.log(`Input: values ${input.values} target: ${input.target}`);
  console.log(`Output: ${sumTwoBrutal(input.values, input.target)}`);
  console.log("");
});

console.log("====================");
console.log("Optimized approach\n");
inputs.forEach((input) => {
  console.log(`Input: values ${input.values} target: ${input.target}`);
  console.log(`Output: ${sumTwo(input.values, input.target)}`);
  console.log("");
});

sumTwoBrutal([2, 4, 5, 7], 10);
