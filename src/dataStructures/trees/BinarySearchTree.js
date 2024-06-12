import { Node } from "./Node.js";

export class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  insert(newValue) {
    if (this.root == null) {
      this.root = new Node(newValue);
      return;
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
        currentNode = currentNode.rightChild;
      }
    }

    // parent  = parent of the null
    // inserte node here
    if (newValue < parent.val) {
      parent.leftChild = new Node(newValue);
    } else {
      parent.rightChild = new Node(newValue);
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
      currentNode.rightChild = this.insertRecursive(
        currentNode.rightChild,
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

      this.inOrderPrint(currentNode.rightChild);
    }
  }

  postOrderPrint(currentNode) {
    if (currentNode != null) {
      this.postOrderPrint(currentNode.leftChild);
      this.postOrderPrint(currentNode.rightChild);

      console.log(currentNode.val);
    }
  }

  search(value) {
    //start at root
    if (this.root == null) {
      console.log("Tree is empty ");
      return;
    }

    // if seearch tree we now what side of the tree to check, dont neet to search the whole tree
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.val) {
        console.log("found value", currentNode.val);
        return currentNode;
      } else if (value < currentNode.val) {
        // search left
        currentNode = currentNode.leftChild;
      } else {
        // search right
        currentNode = currentNode.rightChild;
      }
    }

    console.log("not found");

    return;
  }

  rSearch(value) {
    if (this.root == null) {
      consolelog("Tree is empty");
      return;
    }

    this.recursiveSearch(this.root, value);
  }

  recursiveSearch(currentNode, value) {
    if (currentNode == null) {
      console.log("value not found");
    } else if (currentNode.val == value) {
      console.log("Found", currentNode.val);
      return currentNode.val;
    } else if (value < currentNode.val) {
      this.recursiveSearch(currentNode.leftChild, value);
    } else {
      this.recursiveSearch(currentNode.rightChild, value);
    }
  }

  delete(currentNode, value) {
    // CASE 1: Delete from empty tree
    if (currentNode == null) {
      return false;
    }

    let parentNode;
    // traverse the tree
    while (currentNode && currentNode.val != value) {
      parentNode = currentNode;

      if (value < currentNode.val) {
        currentNode.leftChild;
      } else {
        currentNode.rightChild;
      }
    }

    // CASE 2: Current node = NULL, value not found
    if (currentNode == null) {
      console.log("Value to delete not found");
      return false;
    } else if (
      currentNode.leftChild == null &&
      currentNode.rightChild == null
    ) {
      // CASE 3: currentNode is a leaf node with right and left null
      // check if node to be deleted is right or left of parent or if root

      if (currentNode.val == this.root.val) {
        this.root = null;
        return true;
      } else if (currentNode.val < parentNode.val) {
        parentNode.leftChild = null;
        return true;
      } else {
        parentNode.rightChild = null;
        return true;
      }
    } else if (currentNode.rightChild == null) {
      // CASE 4: node to delete has left child only
      // link left child to the parent
      if (currentNode.val == this.root.val) {
        this.root = currentNode.leftChild;
        return true;
      } else if (currentNode.leftChild.val < parentNode.val) {
        parentNode.leftChild = currentNode.leftChild;
        return true;
      } else {
        parentNode.rightChild = currentNode.leftChild;
        return true;
      }
    } else if (currentNode.leftChild == null) {
      if ((currentNode.val = this.root.val)) {
        this.root = currentNode.rightChild;
        return true;
      } else if (currentNode.rightChild.val < parentNode.val) {
        parentNode.leftChild = currentNode.rightChild;
        return true;
      } else {
        parentNode.rightChild = currentNode.rightChild;
        return true;
      }
    } else {
      // CASE 5: Delete node with 2 children

      let minRight = currentNode.rightChild;

      // traverse to find left mose node in the right subtree

      while (minRight.leftChild !== null) {
        minRight = minRight.leftChild;
      }

      let temp = minRight.val;

      //delete the leftmost node in the right subree by calling in the same delete function to cater for whether it has children or not

      this.delete(this.root, minRight.val);

      currentNode.val = temp;

      return true;
    }
  }
}

var BST = new BinarySearchTree(6);

BST.insert(4);
BST.insert(9);
BST.insert(5);
BST.insert(2);
BST.insert(8);
BST.insert(12);
BST.insert(10);
BST.insert(14);

console.log("Pre Order Print");
BST.preOrderPrint(BST.root);
// console.log("Post Order Print");
// BST.postOrderPrint(BST.root);
// console.log("IN Order Print");
// BST.inOrderPrint(BST.root);

BST.search(16);

BST.rSearch(8);
BST.rSearch(16);
