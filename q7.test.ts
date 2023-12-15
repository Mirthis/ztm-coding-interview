import { validAlmostPalindrome } from "./q7";

describe("test Is Almost A Palindrome", () => {
  test("can remove either non matching character", () => {
    expect(validAlmostPalindrome("race a car")).toBe(true);
  });
  test("abc", () => {
    expect(validAlmostPalindrome("abc")).toBe(false);
  });
});
