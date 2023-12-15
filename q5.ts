// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let currLength = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < currLength; j++) {
      if (s[i - currLength + j] == s[i]) {
        currLength -= j + 1;
        break;
      }
    }
    currLength++;
    if (currLength > maxLength) {
      maxLength = currLength;
    }
  }
  return maxLength;
}

const q5Inputs: Array<string> = [
  "abcabcbb",
  "bbbbb",
  "pwwkew",
  "dvdf",
  "",
  " ",
];

q5Inputs.forEach((input) => {
  console.log(`Input: values ${input}`);
  console.log(`Output: ${lengthOfLongestSubstring(input)}`);
  console.log("");
});
