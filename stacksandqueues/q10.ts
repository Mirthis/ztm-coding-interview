export function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
    } else if (char === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    } else if (char === ")") {
      if (stack.pop() !== "(") {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return !stack.length;
}

isValid("{[()]}");
