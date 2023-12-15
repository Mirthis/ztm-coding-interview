// https://leetcode.com/problems/backspace-string-compare/description/
const bakcspaceStringCompareFirst = (str1: string, str2: string): boolean => {
  let outStr1: string[] = [];
  let outStr2: string[] = [];

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === "#") {
      outStr1.pop();
    } else {
      outStr1.push(str1[i]);
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (str2[j] === "#") {
      outStr2.pop();
    } else {
      outStr2.push(str2[j]);
    }
  }

  return outStr1.join() === outStr2.join();
};

// https://leetcode.com/problems/backspace-string-compare/description/
const bakcspaceStringCompare = (s: string, t: string): boolean => {
  let i = s.length;
  let j = t.length;
  while (!(i <= 0 && j <= 0)) {
    let moveS = 1;
    let moveT = 1;
    let charS = "";
    let charT = "";

    while (moveS > 0) {
      moveS--;
      i--;
      charS = s[i];
      if (charS === "#") {
        moveS += 2;
      }
    }

    while (moveT > 0) {
      moveT--;
      j--;
      charT = t[j];
      if (charT === "#") {
        moveT += 2;
      }
    }

    if (charS !== charT) {
      return false;
    }
  }
  return true;
};

const q4Inputs: Array<Array<string>> = [
  ["ab#z", "az#z"], // true
  ["abc#d", "acc#c"], // false
  ["x#y#z#", "a#"], // true
  ["a###b", "b"], // true
  ["Ab#z", "ab#z"], // false
  ["abc#d", "abzz##d"],
];

console.log("Brute Force approach");
q4Inputs.forEach((input) => {
  console.log(`Input: values ${input}`);
  console.log(`Output: ${bakcspaceStringCompare(input[0], input[1])}`);
  console.log("");
});
