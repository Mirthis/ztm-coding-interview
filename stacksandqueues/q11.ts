// export function minRemoveToMakeValid(s: string): string {
//   const output: string[] = [];
//   const curr: string[] = [];

//   for (let i = 0; i < s.length; i++) {
//     console.log("output loop start: ", output);
//     if (s[i] !== ")") {
//       output.push(s[i]);
//     } else {
//       let lastChar = output.pop();
//       while (lastChar && lastChar !== "(") {
//         curr.push(lastChar);
//         lastChar = output.pop();
//       }
//       console.log("cuur stack: ", curr);
//       if (lastChar === "(") {
//         output.push(lastChar);
//       }
//       let appChar = curr.pop();
//       while (appChar) {
//         output.push(appChar);
//         appChar = curr.pop();
//       }
//       if (lastChar === "(") {
//         output.push(s[i]);
//       }
//     }
//     console.log("output loop end: ", output);
//   }
//   return output.join();
// }

export function minRemoveToMakeValid(s: string): string {
  const output: string[] = s.split("");
  const toRemoveIdx: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (!toRemoveIdx.length) {
        output[i] = "";
      } else {
        toRemoveIdx.pop();
      }
    } else if (s[i] === "(") {
      toRemoveIdx.push(i);
    }
  }
  while (toRemoveIdx.length) {
    output[toRemoveIdx.pop()] = "";
  }

  return output.join("");
}

minRemoveToMakeValid("))((");
