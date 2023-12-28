export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const createLinkedList = (values: number[]): ListNode => {
  let prevNode: ListNode = null;
  let head: ListNode = null;
  for (let i = 0; i < values.length; i++) {
    const newNode = new ListNode(values[i], null);
    if (i === 0) {
      head = newNode;
    }
    if (prevNode) {
      prevNode.next = newNode;
    }
    prevNode = newNode;
  }
  return head;
};

export const printLinkedList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printLinkedList(head.next);
};
