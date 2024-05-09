import { LinkedList } from "./LinkedList.js";
import { Node } from "./Node.js";

let list = new LinkedList();

// for (var i = 0; i < 10; i++) {
//   list = list.insertAtHead(i);
// }

// list.printList();

for (var i = 0; i < 4; i++) {
  list = list.insertAtTail(i);
}

list.printList();
