// Given a directed graph represented by an adjacency array graph and an integer source, representing the start vertex of the graph, return an array of integers, result that shows the order of depth-first traversal starting from the specified source vertex.

import { Graph } from "./Graph.js";
import { Queue, Stack } from "./utils/index.js";

export function dfsTraversal(graph, source) {
  let results = [];
  let stack = new Stack(graph.vertices);
  let visited = new Array(graph.vertices).fill(false);

  //stack the source and mark visited
  stack.push(source);
  visited[source] = true;

  // while queue is not empty

  while (!stack.isEmpty()) {
    //get vertex from queue and add to results
    let currentVertex = stack.pop();
    results.push(currentVertex);

    // check if neighbors have a next value
    let currentNode = graph.list[currentVertex].getHead();

    while (currentNode != null) {
      if (visited[currentNode.data] == false) {
        stack.push(currentNode.data);
        visited[currentNode.data] = true;
      }

      currentNode = currentNode.next;
    }
  }

  return results;
}

// Time COmplexity = O(V + E) Where V is number of vertices and E the numver of edges
// Space Complexity = O(V) at most stack will hold all vertices.
