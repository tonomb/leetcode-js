import { Node } from "./Node.js";
export class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    }
  }

  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this;
  }

  insertAtTail(newData) {
    let newNode = new Node(newData);

    if (this.isEmpty()) {
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;

    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }

    currentNode.nextElement = newNode;

    return this;
  }

  search(value) {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;

    while (currentNode.nextElement != null) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    return false;
  }

  deleteAtHead() {
    if (this.isEmpty()) {
      return this;
    }

    let firstElement = this.head;

    let temp = firstElement.nextElement;

    this.head = temp;

    return this;
  }

  deleteByValue(value) {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;

    if (currentNode.data === value) {
      this.head = currentNode.nextElement;
      return true;
    }

    let previousNext = this.head;

    while (currentNode.nextElement != null) {
      if (currentNode.data === value) {
        previousNext = currentNode.nextElement;
        return true;
      }

      previousNext = currentNode;
      currentNode = currentNode.nextElement;
    }

    return false;
  }

  deleteAtTail() {
    if (this.isEmpty()) {
      return this;
    }

    let currentNode = this.head;

    if (currentNode.nextElement == null) {
      this.head = null;
      return this;
    }

    while (currentNode.nextElement.nextElement != null) {
      currentNode = currentNode.nextElement;
    }

    currentNode.nextElement = null;

    return this;
  }

  length() {
    let length = 0;
    if (this.isEmpty()) {
      return length;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      length += 1;
      currentNode = currentNode.nextElement;
    }

    return length;
  }
}
