import { TreeNode } from "./tree";

const isNodeValid = (
  node: TreeNode | null,
  min: number = -Infinity,
  max: number = Infinity
) => {
  if (node === null) {
    return true;
  }
  if (node.val <= min || node.val >= max) {
    return false;
  }

  return (
    isNodeValid(node.left, min, node.val) &&
    isNodeValid(node.right, node.val, max)
  );
};

function isValidBST(root: TreeNode | null): boolean {
  return isNodeValid(root);
}

//        40
//    35     45
// 21   36  42  51

const tree = new TreeNode(
  40,
  new TreeNode(35, new TreeNode(21), new TreeNode(36)),
  new TreeNode(45, new TreeNode(42), new TreeNode(51))
);

//        40
//    35     45
// 21   36  37  51

const tree2 = new TreeNode(
  40,
  new TreeNode(35, new TreeNode(21), new TreeNode(36)),
  new TreeNode(45, new TreeNode(37), new TreeNode(51))
);

//        40
//    35     45
// 21   41  42  51

const tree3 = new TreeNode(
  40,
  new TreeNode(35, new TreeNode(21), new TreeNode(41)),
  new TreeNode(45, new TreeNode(42), new TreeNode(51))
);

//     0
// null -1
const tree4 = new TreeNode(0, new TreeNode(null), new TreeNode(-1));

console.log(isValidBST(tree));
console.log(isValidBST(tree2));
console.log(isValidBST(tree3));
console.log(isValidBST(tree4));
