# Graph

A **graph** is a ser of nodes that are connnected to each other in the form of a network. FIrst of all, we'll define the two basic components of a graph.

## Vertex

A **vertex** is a esential part of a graph. A collection of vertices formas a graph.

## Edge

A **edge** is a link between two vertices. It can be uni-directional or bi-directional, depending on your graph. An edge can also have a cost associated with it.

## Graph Terminology

### Degree of a vertex:

The total number of edges connected to a vertex. There can be two types of degrees:

1. **In-Degree** The toal number of incoming edges connected to a vertex
2. **Out-Degree** The total number of outgoing edges connected to a vertex

### Paralled Edges

Two unidirected edges are parallel if they have the same end vertices.
Two directed edges are parallel if they have the same origin and destination

### Self Loop

This occurs when an edge starts and ends on the same vertex.

### Adjacency

Two vertices are said to be adjacent if there is an edge connecting them directly

# Types of Graphs

## Unidirected Graph

all edges are undirected. Edges do not have direction.

The max posible vertices in a graph are caluclted via:

```
n(n-1) / 2
```

n = # vertices

## Directed Graph

Edges are unidrectional. You can only travers the graph in one direction.

The max possible vertices are caluclated via:

```
n * n(-1)
```

The min number of verices

```
n-1
```

# Representation of Graphs

## Adjacency Matrix

The **adjacency matrix** is a two-dimensional matrix where each cell can contain a 0 or a 1.​ The row and column headings represent the vertices.

If a cell contains 1, there exists an edge between the corresponding vertices e.g.Matrix[0][1]=1 shows that an edge exists between vertex 0 and 1

The useual convention is to thunk of the rows as sources and the columns as destinations

## Adjacency List

An array of linked list is used to store all the edges in the graph. The size of the array is equal to the number of vertices.

Each index in this array represents a specific vertex in the graph. The entry at index i of the array contains a linked list containing the vertices that are adjacent to vertex i.

# Complexities of Graph Operations

| _V_ is the total number of Vertices _E_ is total number of Edges

| Operation     | Adjacency List | Adjacency Matrix |
| ------------- | -------------- | ---------------- |
| Add Vertex    | O(1)           | O(V^2)           |
| Remove Vertex | O(V+E)         | O(V^2)           |
| Add Edge      | O(1)           | O(1)             |
| Remove Edge   | O(E)           | O(1)             |

Both representations are suitable for different situations. If your model frequently manipulates vertices, the adjacency list is a better choice.

If you are dealing primarily with edges, the adjacency matrix is the more efficient approach.

# Graph Traversals

There are two basic techniques used for graph traversal:

1. Breadth-First Search ( BFS )
1. Depth-Frist Search ( DFS )

_Levels_

Level 1 = Take a vertex as a starting point
Level 2 = All vertices adjacent to the vertex
Level 3 = All Vertices adjacent to those nodes
Level 4 = ....

### Breath-First Search

The BFS algorithm earns its name becasue it grow breadth-wise. All nodes at a certain level are traversed before moving on to the next elvel.

The level-wise expansion ensures that for any starting vertex, you can reach all others, one level at a time.

### Depth-First Traversal

The DFS algorithm is the opposite of BFS in the sense that it grows depth-wise

Starting from any node, we keep mobing to an adjacent node until we reach the farthest level. Then we move back to the starting point and pick another adjacent node. Once again, we probe the farthest level and move back. This process continues untill all nodes are visited.
