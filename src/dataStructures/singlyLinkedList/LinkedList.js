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
    let tempNode = new Node(newData);

    if (this.isEmpty()) {
      let temp = this.head;
      this.head = tempNode;
      tempNode.nextElement = temp;
    } else {
      let temp = this.head;

      while (temp.nextElement != null) {
        temp = temp.nextElement;
      }

      temp.nextElement = tempNode;
      tempNode.nextElement = null;
    }

    return this;
  }
}
