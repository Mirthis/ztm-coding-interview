import { reverseBetween } from "./q7";
import { LinkedList } from "./util";

describe("reverseBetween", () => {
  test("indexes within the list, [1,2,3,4,5], m=2, n=4", () => {
    const inputHead = new LinkedList([1, 2, 3, 4, 5]).head;
    const outputHead = reverseBetween(inputHead, 2, 4);
    const outputValues = LinkedList.toValueList(outputHead);
    expect(outputValues).toBe([1, 4, 3, 2, 5]);
  });
  test("entire list", () => {
    const inputHead = new LinkedList([1, 2, 3, 4, 5]).head;
    const outputHead = reverseBetween(inputHead, 1, 5);
    const outputValues = LinkedList.toValueList(outputHead);
    expect(outputValues).toBe([1, 2, 3, 4, 5]);
  });
  test("single element", () => {
    const inputHead = new LinkedList([5]).head;
    const outputHead = reverseBetween(inputHead, 1, 1);
    const outputValues = LinkedList.toValueList(outputHead);
    expect(outputValues).toBe([5]);
  });
  test("empty list", () => {
    const inputHead = new LinkedList([]).head;
    const outputHead = reverseBetween(inputHead, 0, 0);
    const outputValues = LinkedList.toValueList(outputHead);
    expect(outputValues).toBe([]);
  });
});
