export class Queue {
  constructor(mySize) {
    this.items = [];
    this.size = mySize;
    this.front = 0;
    this.back = -1;
  }

  isFull() {
    return this.items.length >= this.size;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getFront() {
    if (this.items.length != 0) {
      return this.items[0];
    } else {
      console.log("No elements in the queue");
    }
  }

  enqueue(elemet) {
    if (this.items.length >= this.size) {
      console.log("Queue is full");
    } else {
      this.items.push(elemet);
    }
  }

  dequeue() {
    if (this.items.length == 0) {
      console.log("No elements, queue is empty");
    } else {
      return this.items.shift();
    }
  }
}
