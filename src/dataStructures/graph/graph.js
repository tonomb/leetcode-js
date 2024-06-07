import LinkedList from "../singlyLinkedList/LinkedList";

class Graph {
  constructor(vertices) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //Defining an array which can hold LinkedLists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new LinkedList for each vertex/index of the list
    for (let i = 0; i < vertices.length; i++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }
}
