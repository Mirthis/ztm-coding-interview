const bubbleSort = (numbers: number[]) => {
  let run = true;
  while (run) {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (i == 0) run = false;
      const a = numbers[i];
      const b = numbers[i + 1];
      if (a > b) {
        numbers[i] = b;
        numbers[i + 1] = a;
        run = true;
      }
    }
  }
  return numbers;
};

const selectionSort = (numbers: number[]) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    let min: number = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    const numMin = numbers[min];
    numbers[min] = numbers[i];
    numbers[i] = numMin;
  }
  return numbers;
};

const insertionSort = (numbers: number[]) => {
  for (let i = 0; i < numbers.length; i++) {
    const curr = numbers[i];
    for (let j = 0; j < i; j++) {
      const prev = numbers[j];
      if (curr < prev) {
        numbers.splice(i, 1);
        numbers.splice(j, 0, curr);
        break;
      }
    }
  }
  return numbers;
};

const mergeSort = (numbers: number[]) => {
  if (numbers.length === 1) {
    return numbers;
  }
  const middle = Math.ceil(numbers.length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]) => {
  const res: number[] = [];

  let i = 0;
  let j = 0;

  while (i < left.length || j < right.length) {
    if (i >= left.length) {
      res.push(right[j]);
      j++;
    } else if (j >= right.length) {
      res.push(left[i]);
      i++;
    } else if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  return res;
};

export const quickSort = (
  numbers: number[],
  start: number = 0,
  end: number = numbers.length - 1
) => {
  if (end - start < 1) {
    return;
  }
  const pivot = numbers[end];
  let i = start;
  let j = start;
  while (j < end) {
    const num = numbers[j];
    if (num < pivot) {
      if (i !== j) {
        numbers[j] = numbers[i];
        numbers[i] = num;
      }
      i++;
    }
    j++;
  }

  numbers[end] = numbers[i];
  numbers[i] = pivot;

  quickSort(numbers, start, i - 1);
  quickSort(numbers, i + 1, end);
  return numbers;
};

// console.log(bubbleSort([4, 3, 5, 8, 2, 0, 7, 1]));
// console.log(selectionSort([4, 3, 5, 8, 2, 0, 7, 1]));
// console.log(insertionSort([4, 3, 5, 8, 2, 0, 7, 1]));
// console.log(mergeSort([4, 3, 5, 8, 2, 0, 7, 1]));
console.log(quickSort([4, 3, 5, 8, 2, 0, 7, 1]));
