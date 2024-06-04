class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  insertTail(item) {
    const newNode = new Node(item);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;

      newNode.prev = this.tail;

      this.tail = newNode;
    }

    this.length++;

    return newNode;
  }

  removeHead() {
    if (this.length === 0) {
      return null;
    }

    const nodeToRemove = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeToRemove.next;

      this.head.prev = null;
      nodeToRemove.next = null;
    }

    this.length--;

    return nodeToRemove.item;
  }

  firstNode() {
    if (this.head != null) {
      return this.head.item;
    } else {
      return null;
    }
  }

  toString() {
    const list = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      list.push(JSON.stringify(currentNode.item));
      currentNode = currentNode.next;
    }

    return list.toString();
  }
}

//====

class Queue {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getFront() {
    return this.items.firstNode();
  }

  getTail() {
    return this.items.tail.item;
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

var myQueue = new Queue();

console.log("You have successfully created a Queue of size: " + myQueue.size());
console.log("Enqueue Elements 2,4,6,8,10");
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(6);
myQueue.enqueue(8);
myQueue.enqueue(10);

console.log(myQueue.size());

console.log("Dequeue(): " + myQueue.dequeue());
console.log("Dequeue(): " + myQueue.dequeue());

console.log("getFront(): " + myQueue.getFront());
console.log("getTail(): " + myQueue.getTail());

console.log("Enqueue Elements 12,14");
myQueue.enqueue(12);
myQueue.enqueue(14);

while (myQueue.isEmpty() == false) {
  console.log("Dequeue(): " + myQueue.dequeue());
}

console.log("Is queue empty()?: " + myQueue.isEmpty());
console.log("getTop(): " + myQueue.getFront());
