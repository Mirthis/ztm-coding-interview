const binarySearchRec = (
  nums: number[],
  target: number,
  left: number = 0,
  right: number = nums.length
) => {
  const middle = Math.floor((left + right) / 2);
  if (nums[middle] === target) {
    return middle;
  }
  if (right - left < 1) {
    return -1;
  }
  if (nums[middle] <= target) {
    return binarySearchRec(nums, target, middle + 1, right);
  }
  if (nums[middle] >= target) {
    return binarySearchRec(nums, target, left, middle - 1);
  }
};

const binarySearch = (
  nums: number[],
  target: number,
  left: number = 0,
  right: number = nums.length - 1
) => {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] == target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    }
  }
  return -1;
};

export function searchRangeV1(nums: number[], target: number): number[] {
  const index = binarySearch(nums, target);
  if (index === -1) {
    return [-1, -1];
  }
  let leftIndex: number;
  let rightIndex: number;
  for (leftIndex = index; nums[leftIndex] === target; leftIndex--) {}
  for (rightIndex = index; nums[rightIndex] === target; rightIndex++) {}
  return [leftIndex + 1, rightIndex - 1];
}

function searchRangeRec(
  nums: number[],
  target: number,
  left: number = 0,
  right: number = nums.length - 1
): number[] {
  console.log("call l r: ", left, right);
  let leftRes = -1;
  let rightRes = -1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] == target) {
      leftRes = middle;
      rightRes = middle;
      const leftRange = searchRangeRec(nums, target, left, middle - 1);
      const rightRange = searchRangeRec(nums, target, middle + 1, right);
      if (leftRange[0] !== -1) {
        leftRes = Math.min(leftRange[0], leftRange[1]);
      }
      if (rightRange[0] !== -1) {
        rightRes = Math.max(rightRange[0], rightRange[1]);
      }
      return [leftRes, rightRes];
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    }
  }
  return [leftRes, rightRes];
}

const searchRange = function (nums: number[], target: number) {
  if (nums.length < 1) return [-1, -1];
  const firstPos = binarySearch(nums, target, 0, nums.length - 1);

  if (firstPos === -1) return [-1, -1];

  let endPos = firstPos,
    startPos = firstPos,
    temp1,
    temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, target, 0, startPos - 1);
  }
  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, target, endPos + 1, nums.length - 1);
  }
  endPos = temp2;

  return [startPos, endPos];
};

// console.log(binarySearch([1, 3, 4, 5, 7, 9, 14, 21], 11));
// console.log(binarySearch([1, 3, 4, 5, 7, 9, 14, 21], 3));
// console.log(binarySearch([1, 3, 4, 5, 7, 9, 14, 21], 7));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));

// [5,7,8,8,8,8,8] // m=3, lr=3 rr=3
//  0 1 2 3 4 5 6
// [5, 7, 8] // m=1 - lr=-1 rr=2
// [5] // m=-1 [8] m=2 lr=2 rr=2
// [8,8,8] m=5 lr=5 rr=5
// [8] m=4 lr=4 rr=4 [8] m=6 lr=6 rr=6
