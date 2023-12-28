import { after, before } from "node:test";
import { ListNode, printLinkedList } from "./util";

function findLoop(head: ListNode | null): ListNode | null {
  let turt = head;
  let hare = head;
  while (hare && hare.next) {
    turt = turt.next;
    hare = hare.next.next;
    if (hare === turt) {
      turt = head;
      while (turt !== hare) {
        turt = turt.next;
        hare = hare.next;
      }
      return hare;
    }
  }
  return null;
}

// list 1
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);
const node7 = new ListNode(7);
const node8 = new ListNode(8);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node3;

console.log(findLoop(node1));
