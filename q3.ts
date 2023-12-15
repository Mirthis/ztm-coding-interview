// https://leetcode.com/problems/trapping-rain-water/description/
const totalArea = (height: number[]): number => {
  let area = 0;
  let i = 0;
  let j = height.length - 1;
  let leftHeight = height[0];
  let rigthHeight = height[height.length - 1];
  while (i < j) {
    if (leftHeight <= rigthHeight) {
      i++;
      const currHeight = height[i];
      if (currHeight >= leftHeight) {
        leftHeight = currHeight;
      } else {
        area += leftHeight - currHeight;
      }
    } else {
      j--;
      const currHeight = height[j];
      if (currHeight >= rigthHeight) {
        rigthHeight = currHeight;
      } else {
        area += rigthHeight - currHeight;
      }
    }
  }
  return area;
};

const q3Inputs: Array<Array<number>> = [
  [], // 0
  [3], // 0
  [3, 4, 3], // 0
  [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2], // 8
  [5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 2], // 20
];

q3Inputs.forEach((input) => {
  console.log(`Input: values ${input}`);
  console.log(`Output: ${totalArea(input)}`);
  console.log("");
});
