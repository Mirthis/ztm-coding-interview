import { isValid } from "./q10";
import { minRemoveToMakeValid } from "./q11";

describe("test minRemoveToMakeValid", () => {
  test("one removal", () => {
    const input = "a)bc(d)";
    expect(minRemoveToMakeValid(input)).toBe("abc(d)");
  });
  test("two anwers", () => {
    const input = "(ab(c)d";
    expect(["ab(c)d", "(abc)d"]).toContain(minRemoveToMakeValid(input));
  });
  test("no matching brackets", () => {
    const input = "))((";
    expect(minRemoveToMakeValid(input)).toBe("");
  });
});
