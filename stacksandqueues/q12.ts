class MyQueue {
  stack: number[];
  queue: number[];
  constructor() {
    this.stack = [];
    this.queue = [];
  }

  createQueue() {
    while (this.stack.length) {
      this.queue.push(this.stack.pop());
    }
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    if (!this.queue.length) {
      this.createQueue();
    }
    return this.queue.pop();
  }

  peek(): number {
    if (!this.queue.length) {
      this.createQueue();
    }
    return this.queue[this.queue.length - 1];
  }

  empty(): boolean {
    return this.queue.length == 0 && this.stack.length == 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);
console.log("q: ", obj.queue, " s: ", obj.stack);
var param_1 = obj.pop();
console.log("First pop: ", param_1);
var param_2 = obj.pop();
console.log("Second pop: ", param_2);
console.log("q: ", obj.queue, " s: ", obj.stack);
var param_3 = obj.peek();
console.log("Peek: ", param_3);
var param_4 = obj.empty();
console.log("Empty: ", param_4);
obj.push(4);
console.log("q: ", obj.queue, " s: ", obj.stack);
