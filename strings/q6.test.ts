import { isPalindrome } from "./q6";

describe("test Is Palindrome", () => {
  test("empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });
  test("one character string", () => {
    expect(isPalindrome("a")).toBe(true);
  });
  test("aabaa", () => {
    expect(isPalindrome("aabaa")).toBe(true);
  });
  test("aabbaa", () => {
    expect(isPalindrome("aabbaa")).toBe(true);
  });
  test("abc", () => {
    expect(isPalindrome("abc")).toBe(false);
  });
  test("A man, a plan, a canal: Panama", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
});
