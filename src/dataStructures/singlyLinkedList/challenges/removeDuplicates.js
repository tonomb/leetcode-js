// Given the head of a singly linked list, remove any duplicate nodes from the list in place, ensuring that only one occurrence of each value is retained in the modified list.

import { LinkedListNode } from "./ds_v1/LinkedList.js";

// Definition of a linked list node
// class LinkedListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

function removeDuplicates(head) {
  let currentNode = head;
  let prevNode = head;
  let nodeMap = new Map();

  if (!head) {
    return null;
  }

  if (head.next == null) {
    return head;
  }

  while (currentNode != null) {
    if (currentNode.next != null) {
      if (!nodeMap.has(currentNode.next.data)) {
        nodeMap.set(currentNode.next.data);
      } else {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  // return list
  return head;
}
