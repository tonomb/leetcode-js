// Given the heads of two linked lists, head1 and head2, as inputs. Implement the union and intersection functions for the linked lists. The order of elements in the output lists doesn’t matter.

// Here’s how you will implement the functions:

// Union: This function will take two linked lists as input and return a new linked list containing all the unique elements.

// Intersection: This function will take two linked lists as input and return all the common elements between them as a new linked list.

import { LinkedListNode } from "./ds_v1/LinkedList.js";

// Definition of a linked list node
// class LinkedListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

function union(head1, head2) {
  let currentNode1 = head1;
  let nodeMap = new Map();

  while (currentNode1 != null) {
    if (!nodeMap.has(currentNode1.data)) {
      nodeMap.set(currentNode1.data);
    }
    currentNode1 = currentNode1.next;
  }

  let currentNode2 = head2;

  while (currentNode2 != null) {
    if (!nodeMap.has(currentNode2.data)) {
      //add data to head1
      let tempNode = new LinkedListNode(currentNode2.data);
      tempNode.next = head1;
      head1 = tempNode;
    }
    currentNode2 = currentNode2.next;
  }

  // Replace this placeholder return statement with your code
  return head1;
}

function intersection(head1, head2) {
  let currentNode1 = head1;
  let nodeMap = new Map();
  let result = null;

  while (currentNode1 != null) {
    if (!nodeMap.has(currentNode1.data)) {
      nodeMap.set(currentNode1.data);
    }
    currentNode1 = currentNode1.next;
  }

  let currentNode2 = head2;

  while (currentNode2 != null) {
    if (nodeMap.has(currentNode2.data)) {
      //add data to result

      result = insertAtHead(result, currentNode2.data);
    }
    currentNode2 = currentNode2.next;
  }

  return result;
}

function insertAtHead(head, data) {
  // Create a new node with the provided data
  let newNode = new LinkedListNode(data);

  // Set the next pointer of the new node to the current head of the list
  newNode.next = head;

  // Update the head of the list to point to the new node
  return newNode;
}

export { union, intersection };
