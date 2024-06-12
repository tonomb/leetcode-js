# Trees

Trees consist of vertices ( nodes ) and edges that connext them. Trees are hierarchical. They are similar to Graphs, except that a cycle cannot exist in a Tree - they are acyclic. In other words there is always one path between any two nodes.

- **Root Node**: A node with no parent nodes. Generally, trees don't have to have a root. However, Rooted trees have one distinguished node.

- **Child Node**: A node linked to an upper node ( Parent Node)
- **Parent Nodes**: A node that has links to one or more Child Node
- **Sibling Node**: Nodes that share the same Parent Node
- **Leaf Node**: A node that doesn't have any children
- **Ancestor Nodes**: The nodes on the path fro a node d to the root node. Ancestor nodes include node d's parents, grandparents, and so on.

### Other Terminologies and Formulas

- **Sub-Tree** for a particular non-leaf node, a collection of nodes, essentially the tre, starting from its child node. The Tree formed by a node and its descendants.
- **Degree of a node**: Total number of children of a node
- **Length of a path**: Total number of edged in a path
- **Depth of a node N** The length of the path fro a node n to the root node. The depth of the root node is 0
- **Height of a node N**: The length of the path from N to its deepest descendant. The height of the tree itself is the height of the root node, and the height of leaf nodes is always 0
- **Height of a Tree**: Height of its root node

## Binary Search Tree

inary Search Trees (BSTs) are a special kind of binary tree where each node of the tree has key-value pairs

For all the nodes in a BST, the values of all the nodes in the left subtree of a node are less than the value of that node. All the values in the right subtree of a node are greater than the value of that node. This is referred to as the BST rule.

the time complexity of all three basic operations- Insertion, Deletion, and Search, take 𝑂(h) time, where “h” is the height of Binary Search Tre

## AVL Tree

They are Binary Search Trees in which for every internal node V of the tree T the heights of V's children can differ by at most 1

To put it simply, for each node, the height of the left and right subtrees in an AVL tree can differ at most by one, or the tree is balanced.

when the tree is completely balanced, the time complexity for basic operations is O(log(n))
