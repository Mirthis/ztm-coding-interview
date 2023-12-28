import { findKthLargest } from "./q13";

describe("test find Kth Largest", () => {
  test("standard case", () => {
    const numbers = [5, 3, 1, 6, 4, 2];
    const k = 2;
    expect(findKthLargest(numbers, k)).toBe(5);
  });
  test("duplicate values", () => {
    const numbers = [2, 3, 1, 2, 4, 2];
    const k = 4;
    expect(findKthLargest(numbers, k)).toBe(2);
  });
  test("one element", () => {
    const numbers = [3];
    const k = 1;
    expect(findKthLargest(numbers, k)).toBe(3);
  });
});
