import { TreeNode } from "./tree";

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

//    3
//9     20
//    15   7
const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

const tree2 = new TreeNode(
  3,
  new TreeNode(9, new TreeNode(9, new TreeNode(4))),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(maxDepth(tree));
console.log(maxDepth(tree2));
