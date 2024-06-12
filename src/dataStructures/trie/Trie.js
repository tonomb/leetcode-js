export class TriNode {
  constructor(char) {
    this.children = new Array(26).fill(null); // Total of english alphabet
    this.isEndWord = false; // will be true if node represents the end of a word
    this.char = char; // to store the value of the key.
  }

  markAsLeaf() {
    this.isEndWord = true;
  }

  unMarkAsLeaf() {
    this.isEndWord = false;
  }
}

export class Trie {
  constructor() {
    this.root = new TriNode(""); // Root Node
  }

  //function to get index of character 't'
  getIndex(t) {
    return t.charCodeAt(0) - "a".charCodeAt(0); //The charCodeAt() function returns the order of a given character
  }

  // Insert Key into trie
  insert(key) {
    // None keys are not allowed
    if (key === null) {
      return;
    }

    key = key.toLowerCase(); // keys are stored in lower case

    let currentNode = this.root;
    let index = 0; // to store the char index

    // Iterate the trie wiht the given character index, if the index points to null create a node and go down a level.
    for (let level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);

      if (currentNode.children[index] == null) {
        currentNode.children[index] = new TriNode(key[level]);
        console.log(String(key[level]) + "inserted");
      }

      currentNode = currentNode.children[index];
    }

    currentNode.markAsLeaf();
    console.log("'" + key + "' inserted");
  }

  insertRecursive(key) {
    if (key == null) {
      return;
    }

    key = key.toLowerCase();

    const insertR = (currentNode, key, level) => {
      // Base Case, we've reached the end of the key
      if (level === key.length) {
        currentNode.markAsLeaf();
        return;
      }

      let index = this.getIndex(key[level]);

      if (currentNode.children[index] === null) {
        currentNode.children[index] = new TriNode(key[level]);
      }
      // move to the next level
      insertR(currentNode.children[index], key, level + 1);
    };

    // Start recursive call
    insertR(this.root, key, 0);
  }

  search(key) {
    if (key === null) {
      return false;
    }

    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    for (let level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);

      if (currentNode.children[index] === null) {
        return false;
      }

      currentNode = currentNode.children[index];
    }

    if (currentNode != null && currentNode.isEndWord()) {
      return true;
    }

    return false;
  }

  delete(key) {
    return null;
  }
}

let trieNode = new TriNode("a");
let t = new Trie();

console.log(t.getIndex("f"));