// https://leetcode.com/problems/valid-palindrome-ii/
import { isPalindrome } from "./q6";

export function validAlmostPalindrome(s: string): boolean {
  const cleansedString = s.toLowerCase().replace(/\W/g, "");
  let i = 0;
  let j = cleansedString.length - 1;
  while (i <= j) {
    if (cleansedString[i] !== cleansedString[j]) {
      return (
        isPalindrome(s.substring(i + 1, j + 1)) ||
        isPalindrome(s.substring(i, j))
      );
    }
    i++;
    j--;
  }

  return true;
}

// cccupuu
// ucccupu

// abc
// 012
