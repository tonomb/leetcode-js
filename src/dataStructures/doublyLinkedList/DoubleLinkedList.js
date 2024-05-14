import { Node } from "./Node.js";

export class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    }

    let temp = this.head;
    while (temp != null) {
      process.stdout.write(String(temp.data));
      process.stdout.write(" -> ");
      temp = temp.nextElement;
    }
    console.log("null");
    return true;
  }

  insertAtHead(newData) {
    let newNode = new Node(newData);
    newNode.nextElement = this.head;

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.head.previousElement = newNode;
    this.head = newNode;
    return this;
  }

  deleteAtTail() {
    if (this.isEmpty()) {
      return this;
    }

    let lastElement = this.tail;
    this.tail = lastElement.previousElement;

    if (this.tail === null) {
      this.head = null;
      return this;
    }
    this.tail.nextElement = null;
    return this;
  }
}
