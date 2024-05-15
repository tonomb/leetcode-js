// Given a singly linked list, remove the nth node from the end of the list and return its head.

// Template for the linked list
export class LinkedList {
  constructor() {
    this.head = null;

    // insertNodeAtHead method will insert a LinkedListNode at head
    // of a linked list.
    this.insertNodeAtHead = function (node) {
      if (this.head != null) {
        node.next = this.head;
        this.head = node;
      } else this.head = node;
    };

    // createLinkedList method will create the linked list using the
    // given integer array with the help of InsertAthead method.
    this.createLinkedList = function (list) {
      list.reverse().forEach((element) => {
        let newNode = new LinkedListNode(element);
        this.insertNodeAtHead(newNode);
      });
    };

    // This method will display the elements of the linked list.
    this.display = function () {
      let result = "",
        temp = this.head;
      while (temp != null) {
        result += temp.data;
        temp = temp.next;
        if (temp != null) {
          result += ", ";
        }
      }
      result += "";
      return result;
    };
  }
}

export class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export function removeNthLastNode(head, n) {
  let left = head;
  let right = head;

  for (let i = 0; i < n; i++) {
    right = right.next;
  }

  if (right === null) {
    return head.next;
  }

  while (right.next != null) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return head;
}
