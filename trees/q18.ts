import { TreeNode } from "./tree";

const findDepth = (node: TreeNode | null): number => {
  if (!node) return 0;
  return 1 + findDepth(node.left);
};

const findLeaf = (node: TreeNode, depth: number, index: number): boolean => {
  let left = 0;
  let right = 2 ** (depth - 1) - 1;
  let currNode = node;
  while (left < right) {
    let middle = Math.ceil((left + right) / 2);
    if (middle <= index) {
      left = middle;
      currNode = currNode.right;
    } else {
      right = middle - 1;
      currNode = currNode.left;
    }
  }
  return !!currNode;
};

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;
  const depth = findDepth(root);
  const length = 2 ** (depth - 1);
  let left = 0;
  let right = length - 1;
  while (left < right) {
    const middle = Math.ceil((left + right) / 2);
    console.log("l r m: ", left, right, middle);
    const nodeExist = findLeaf(root, depth, middle);
    if (nodeExist) {
      left = middle;
    } else {
      right = middle - 1;
    }
  }
  console.log(depth, left);
  return 2 ** (depth - 1) + left;
}

//        3
//    9      20
// 11   4  15   7
// 2 1
const tree = new TreeNode(
  3,
  new TreeNode(
    9,
    new TreeNode(11, new TreeNode(2), new TreeNode(1)),
    new TreeNode(4)
  ),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

//        3
//    9        20
// 11   4   15   7
// 0 1 2 3 4
const tree2 = new TreeNode(
  3,
  new TreeNode(
    9,
    new TreeNode(11, new TreeNode(0), new TreeNode(1)),
    new TreeNode(4, new TreeNode(2), new TreeNode(3))
  ),
  new TreeNode(20, new TreeNode(15, new TreeNode(4)), new TreeNode(7))
);

const tree3 = new TreeNode(
  3,
  new TreeNode(
    9,
    new TreeNode(11, new TreeNode(0), new TreeNode(1)),
    new TreeNode(4, new TreeNode(2), new TreeNode(3))
  ),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

// console.log(countNodes(tree));

console.log(countNodes(tree));
console.log(countNodes(tree2));
console.log(countNodes(tree3));
console.log(countNodes(null));
