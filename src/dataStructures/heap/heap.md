# Heap

Heaps are advanced data structures that are useful in applications where you want to sort and implement priority queues. They are regular binary trees with two special properties.

## Heaps must be complete binary trees.

Complete binary tree is a tree where each node has at most two children and the nodes at all levels are full, except ofr the leaf nodes which can be empty.

## The nodes must be ordered according to the heap order property.

### Min Heap Order Property:

In min-heaps, all the parent node keys are less than or equal totheir child node keys. So, the root node, in this case, will always contain the smallest element present in the Heap. If Node A has a childe node B then `key(A) <= key(B)`

### Max Heap Order Property:

All the parent node keys must be greater than or equal to their child node keys in max-heaps. So, the root node will always contain the largest element in the heap. If Node A has child node B, then `key(A) >= key(B)`

## What are Heaps used for?

The primary purpose of heaps is to return the smallest or largest element. This is because the time complexity of getting the minimum/maximum value from a min/max heap is O(1), i.e contant time. This way, algorithms that require retrieving the maximum/minimum value can be optimized. Heaps are also used to design Priority Queues.

## Heap representation in Arrays.

Heaps can be implemented using arrays in javascript

The index of each node is how much you'd count if you started from 0 at the root and went from left to right ( level wise ) in a tree.

                                         100
                                     /          \
                                    60           80
                                 /      \       /     \
                                30      50     70       75
                              /    \     /
                            20     10   40

                 [100,60,80,30,50,70,75,20,10,40]
