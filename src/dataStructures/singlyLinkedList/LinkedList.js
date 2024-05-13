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
}
