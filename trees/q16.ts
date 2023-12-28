import { TreeNode } from "./tree";

function levelOrder(root: TreeNode | null): number[][] {
  const res = [];
  let currLevel = root ? [root.val] : [];
  let nextLevel = [];
  let nodeQueue = root ? [root] : [];
  while (nodeQueue.length) {
    const currLevel = [];
    const length = nodeQueue.length;
    for (let i = 0; i < length; i++) {
      const currNode = nodeQueue.shift();
      currLevel.push(currNode.val);
      if (currNode.left !== null) {
        nodeQueue.push(currNode.left);
      }
      if (currNode.right !== null) {
        nodeQueue.push(currNode.right);
      }
    }
    res.push(currLevel);
  }
  return res;
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

// console.log(levelOrder(tree));
console.log(levelOrder(tree2));
