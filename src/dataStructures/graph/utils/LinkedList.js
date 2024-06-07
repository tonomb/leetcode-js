import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.next = this.head;
    this.head = tempNode;
    return this; // Return updated list
  }

  isEmpty() {
    return this.head === null;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return false;
    } else {
      let currentNode = this.head;

      while (currentNode != null) {
        process.stdout.write(String(currentNode.data));
        process.stdout.write("-->");

        currentNode = currentNode.next;
      }

      console.log("null");

      return true;
    }
  }

  getHead() {
    return this.head;
  }

  setHead(newHead) {
    this.head = newHead;
    return this;
  }

  getListStr() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return "null";
    } else {
      let st = "";
      let temp = this.head;
      while (temp != null) {
        st += String(temp.data);
        st += " -> ";
        temp = temp.nextElement;
      }
      st += "null";
      return st;
    }
  }

  insertAtTail(newData) {
    let newNode = new Node(newData);

    if (this.isEmpty()) {
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;

    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    return this;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.data === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  deleteAtHead() {
    if (this.isEmpty()) {
      return this;
    }

    let firstNode = this.head;

    this.head = firstNode.next;

    return this;
  }

  deleteValue(value) {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;

    if (currentNode.data === value) {
      this.head = currentNode.next;
      return true;
    }

    while (currentNode.next != null) {
      if (currentNode.next.data === value) {
        currentNode.next = currentNode.next.next;
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  deleteAtTail() {
    if (this.isEmpty()) {
      return this;
    }

    let currentNode = this.head;

    // Check for edge case when list only has 1 element.
    if (currentNode.next == null) {
      this.deleteAtHead();
      return this;
    }

    while (currentNode.next.next != null) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    return this;
  }
}
