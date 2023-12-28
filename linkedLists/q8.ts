import { after, before } from "node:test";
import { printLinkedList } from "./util";

class Node {
  val: number;
  prev: Node | null;
  next: Node | null;
  child: Node | null;
  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

function flatten(head: Node | null): Node | null {
  let current: Node = head;
  let beforeChild: Node;
  while (current) {
    if (current.child) {
      let innerCurrent = current.child;
      while (innerCurrent.next) {
        innerCurrent = innerCurrent.next;
      }
      innerCurrent.next = current.next; // 8->3
      if (innerCurrent.next) {
        innerCurrent.next.prev = innerCurrent;
      }

      current.next = current.child; // 2->6
      current.next.prev = current; // 6<-2
      current.child = null;
    }
    current = current.next;
  }
  return head;
}

// list 1
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;

// list 2
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
node6.next = node7;
node7.prev = node6;
node7.next = node8;
node8.prev = node7;
node2.child = node6;

// list 3
const node9 = new Node(9);
const node10 = new Node(10);
const node11 = new Node(11);
node9.next = node10;
node10.prev = node9;
node10.next = node11;
node11.prev = node10;
node7.child = node9;

printLinkedList(flatten(node1));
