// Given the head of a linked list, check whether or not a cycle is present in the linked list.
// A cycle is present in a linked list if at least one node can be reached again by traversing the next pointer.
// If a cycle exists, return TRUE; otherwise, return FALSE.
import { LinkedList } from "../LinkedList";
import { Node } from "../Node";

export function detectCycle(head) {
  const valueMap = new Map();

  if (!head) {
    return false;
  }

  while (head.nextElement != null) {
    if (valueMap.has(head.data)) {
      return true;
    }
    valueMap.set(head.data);

    head = head.nextElement;
  }

  return false;
}

// We will use Floyd’s cycle-finding algorithm to detect a cycle in the linked list. In this algorithm, we use two pointers to check if a cycle exists in a linked list: a slow pointer that moves one node at a time and a fast pointer that moves two nodes at a time. If there is no cycle in the linked list, the fast pointer will reach the end of the linked list before the slow pointer. If there is a cycle, the fast pointer will eventually catch up to the slow pointer because it moves faster.

// Initialize two pointers, p1 and p2, to point to the head of the linked list.

// Traverse the linked list until the end of the linked list is reached.

// While traversing the linked list, move p1 one node at a time and move p2 two nodes at a time.

// If at any point the two pointers meet, it means that a cycle has been found. In this case, we return TRUE.

// If the end of the linked list is reached, that is, p2 is pointing to NULL, a cycle does not exist. In this case, we return FALSE.

export function detectCyclePointers(head) {
  let p1 = head;
  let p2 = head;

  while (p1 != null && p2 != null && p2.nextElement != null) {
    p1 = p1.nextElement; // move 1 node at a time
    p2 = p2.nextElement.nextElement; // moves 2 nodes at a time

    if (p1 === p2) {
      return true;
    }
  }

  return false;
}
