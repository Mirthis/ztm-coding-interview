import { TreeNode } from "./tree";

function rightSideViewBFS(root: TreeNode | null): number[] {
  const res = [];
  let nodeQueue = root ? [root] : [];
  while (nodeQueue.length) {
    let currLevelVal: number;
    const length = nodeQueue.length;
    for (let i = 0; i < length; i++) {
      const currNode = nodeQueue.shift();
      currLevelVal = currNode.val;
      if (currNode.left !== null) {
        nodeQueue.push(currNode.left);
      }
      if (currNode.right !== null) {
        nodeQueue.push(currNode.right);
      }
    }
    res.push(currLevelVal);
  }
  return res;
}

const traverseTree = (
  node: TreeNode | null,
  list: number[],
  level: number
): number[] => {
  if (list.length < level) {
    list.push(node.val);
  }

  if (node.right) {
    traverseTree(node.right, list, level + 1);
  }
  if (node.left) {
    traverseTree(node.left, list, level + 1);
  }
  return list;
};

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  return traverseTree(root, [], 1);
}

//    3
//9     20
//    15   7

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

// 3
// 9   20
// 11  15  7
// 4
const tree2 = new TreeNode(
  3,
  new TreeNode(9, new TreeNode(11, new TreeNode(4))),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(rightSideViewBFS(tree));
console.log(rightSideViewBFS(tree2));

console.log(traverseTree(tree, [], 1));
console.log(traverseTree(tree2, [], 1));
