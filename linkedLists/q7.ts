import { before } from "node:test";
import { ListNode, createLinkedList, printLinkedList } from "./util";

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let prev = null;
  let current = head; // 1
  let i = 1;
  let beforeLeft: ListNode | null;
  let leftNode: ListNode | null;
  let rightNode: ListNode | null;
  while (current) {
    let nextTemp = current.next;
    if (i === left) {
      beforeLeft = prev;
      leftNode = current;
    }
    if (i > left && i <= right) {
      current.next = prev;
    }
    if (i === right) {
      if (beforeLeft) {
        beforeLeft.next = current;
      }
      leftNode.next = nextTemp;
      rightNode = current;
    }
    prev = current;
    current = nextTemp;
    i++;
  }

  if (left > 1) {
    return head;
  } else {
    return rightNode;
  }
}

const inputList = createLinkedList([1, 2, 3, 4, 5]);

console.log("Input list: ");
printLinkedList(inputList);
const newList = reverseBetween(inputList, 1, 4);
console.log("Output list: ");
printLinkedList(newList);
