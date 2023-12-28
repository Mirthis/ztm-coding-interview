// https://leetcode.com/problems/container-with-most-water/description/
const maxAreaBruteForce = (height: number[]): number => {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};

const maxArea = (height: number[]): number => {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;
  const heightA = height[i];
  const heightB = height[j];
  while (i < j) {
    const area = Math.min(heightA, heightB) * (j - i);
    if (area > maxArea) {
      maxArea = area;
    }
    if (heightA < heightB) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

const inputs: Array<Array<number>> = [
  [], // 0
  [1], // 0
  [1, 5, 3, 7, 4], // 12
  [1, 8, 6, 2, 5, 4, 8, 3, 7], //49
  [7, 1, 2, 3, 9], // 20 // 28
  [4, 8, 1, 2, 3, 9], // 32
];

// console.log("Brute Force approach");
// q2Inputs.forEach((input) => {
//   console.log(`Input: values ${input}`);
//   console.log(`Output: ${maxAreaBruteForce(input)}`);
//   console.log("");
// });

console.log("Optitmized approach");
inputs.forEach((input) => {
  console.log(`Input: values ${input}`);
  console.log(`Output: ${maxAreaBruteForce(input)}`);
  console.log("");
});
