// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node. This happens when the length of the list is even, and the second middle node occurs at length/2

// Otherwise, if the length of the list is odd, the middle node occurs at (length/2) +1

import { LinkedList } from "../LinkedList";
import { Node } from "../Node";

function findMid(head) {
  let startHead = head;

  let listLength = 0;

  while (head != null) {
    listLength++;
    head = head.next;
  }

  let middle = Math.floor(listLength / 2);

  for (let i = 0; i < middle; i++) {
    startHead = startHead.next;
  }
  return startHead;
}

export { findMid };

// With 2 pointers

function findMidPointers(head) {
  let mid = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    mid = mid.next;
    fast = fast.next.next;
  }

  return mid;
}
