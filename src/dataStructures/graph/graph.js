import { LinkedList } from "./utils/index.js";

// The implementation will be based on the adjacency list model

class Graph {
  constructor(vertices) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //Defining the adjacency list which can hold LinkedLists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new LinkedList for each vertex/index of the list
    for (var i = 0; i < vertices; i++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices) {
      // We are implementing a directed list, (0,1) is not the same as (1,0)

      this.list[source].insertAtHead(destination);

      // if we were implementing a undirected graph where (1,0) == (0, 1)
      // we would createa n additional edge from detinaction to source as well

      this.list[destination].insertAtHead(source);
    }
  }

  printGraph() {
    console.log(">>Adjecancy list of Directed Graph");

    let i;

    for (i = 0; i < this.list.length; i++) {
      process.stdout.write("|" + String(i) + "| => ");
      let temp = this.list[i].getHead();

      while (temp != null) {
        process.stdout.write(" [" + String(temp.data) + "] -> ");
        temp = temp.next;
      }

      console.log("null");
    }
  }
}

let g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.printGraph();
