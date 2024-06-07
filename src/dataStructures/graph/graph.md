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