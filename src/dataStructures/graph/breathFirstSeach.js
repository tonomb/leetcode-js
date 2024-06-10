// Given a directed graph represented as an adjacency list, graph, and an integer, source, which is the starting vertex number, return an array of integers, result, that contains the order of the graph’s breadth-first traversal starting from the source vertex.

import { Queue } from "./utils/index.js";
import { Graph } from "./graph.js";

export function bfsTraversal(graph, source) {
  let result = [];
  let graphQueue = new Queue(graph.vertices);

  // Keep track of visited vertex
  let visited = new Array(graph.vertices).fill(false);

  // Enqueue the source vertex and mark it as visited
  graphQueue.enqueue(source);
  visited[source] = true;

  // while queue is not empty
  while (graphQueue.isEmpty() == false) {
    // get element from queue
    let currentVertex = graphQueue.dequeue();
    // add data to reulst arrau
    result.push(currentVertex);

    // push all neighbors into queue
    let currentNode = graph.list[currentVertex].getHead();

    while (currentNode != null) {
      if (visited[currentNode.data] == false) {
        graphQueue.enqueue(currentNode.data);

        // Mark vertex as visited.
        visited[currentNode.data] = true;
      }

      currentNode = currentNode.next;
    }
  }

  // once queue is empty retun results array

  return result;
}
