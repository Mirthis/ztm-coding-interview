import { isValid } from "./q10";

describe("test Is valid string", () => {
  test("empty string", () => {
    const input = "";
    expect(isValid(input)).toBe(true);
  });
  test("matching brackets", () => {
    const input = "{[()]}";
    expect(isValid(input)).toBe(true);
  });
  test("missing brackets", () => {
    const input = "{[()";
    expect(isValid(input)).toBe(false);
  });
  test("unmatching brackets", () => {
    const input = "{[()}]";
    expect(isValid(input)).toBe(false);
  });
  test("matching brackets different nesting", () => {
    const input = "{[]()}";
    expect(isValid(input)).toBe(true);
  });
});
