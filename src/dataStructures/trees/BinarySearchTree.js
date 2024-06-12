import { Node } from "./Node.js";

export class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  insert(newValue) {
    if (this.root == null) {
      this.root = new Node(newValue);
      return this;
    }

    //start from the root
    let currentNode = this.root;
    let parent;

    // iterate untill we find parent of null
    while (currentNode) {
      parent = currentNode;
      if (newValue < currentNode.val) {
        //iterate left subtree
        currentNode = currentNode.leftChild;
      } else {
        // iterate to the right subtree
        currentNode = currentNode.righChild;
      }
    }

    // parent  = parent of the null
    // inserte node here
    if (newValue < parent) {
      parent.leftChild = new Node(newValue);
    } else {
      parent.righChild = new Node(newValue);
    }
  }

  insertRecursive(currentNode, newValue) {
    if (currentNode === null) {
      // We found a place! initialize it to new value
      currentNode = new Node(newValue);
      return this;
    } else if (newValue < currentNode.val) {
      currentNode.leftChild = this.insertRecursive(
        currentNode.leftChild,
        newValue
      );
    } else {
      currentNode.righChild = this.insertRecursive(
        currentNode.righChild,
        newValue
      );
    }

    return currentNode;
  }

  insertBST(newValue) {
    if (this.root == null) {
      this.root = new Node(newValue);
    }

    this.insertRecursive(this.root, newValue);
  }

  preOrderPrint(currentNode) {
    if (currentNode != null) {
      console.log(currentNode.val);
      // make recursive call to left
      this.preOrderPrint(currentNode.leftChild);
      // make recursive call to right
      this.preOrderPrint(currentNode.rightChild);
    }
  }

  inOrderPrint(currentNode) {
    if (currentNode != null) {
      this.inOrderPrint(currentNode.leftChild);

      console.log(currentNode.val);

      this.inOrderPrint(currentNode.righChild);
    }
  }

  postOrderPrint(currentNode) {
    if (currentNode != null) {
      this.postOrderPrint(currentNode.leftChild);
      this.postOrderPrint(currentNode.righChild);

      console.log(currentNode.val);
    }
  }
}

var BST = new BinarySearchTree(8);

console.log(" The root value of the BST:", BST.root.val);
