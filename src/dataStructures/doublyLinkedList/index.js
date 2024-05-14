import { DoubleLinkedList } from "./DoubleLinkedList.js";

const list = new DoubleLinkedList();

list.printList();

list.insertAtHead(1);

list.printList();
list.insertAtHead(2);

list.printList();
list.insertAtHead(3);

list.printList();
list.insertAtHead(4);

list.printList();

list.deleteAtTail();
list.printList();
