import DoublyLinkedList from "./DoublyLinkedList.js";
class Queue {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  isEmpty() {
    return this.items.length == 0;
  }

  getFront() {
    if (!this.isEmpty()) {
      return this.items.getHead();
    } else return null;
  }

  size() {
    return this.items.length;
  }

  enqueue(element) {
    return this.items.insertTail(element);
  }

  dequeue() {
    return this.items.removeHead();
  }
}
export default Queue;
