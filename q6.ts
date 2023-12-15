// https://leetcode.com/problems/valid-palindrome/description/
export function isPalindrome(s: string): boolean {
  const cleansedString = s.toLowerCase().replace(/\W/g, "");
  let i = 0;
  let j = cleansedString.length - 1;
  while (i <= j) {
    if (cleansedString[i] !== cleansedString[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
