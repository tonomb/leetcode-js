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
