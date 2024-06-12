# Trie

Tree-like data structure that proves to be very efficient while solving programmiing problems related to strings.

This data structure is also known as a Prefix Tree.

The main purpose of using this structure is to provide fast retrieval. Tries are mostly used in dictionary word searches, search engine auto-suggestions, and IP routing.

- Tries are similar to graphs as they are a combination of nodes where each node represents a unique alphabet.
- Each node can point to Null or other children nodes.
- The size of a trie depends upon the number of alphabets. For example, in English, there are 26 letters so the number of unique nodes cannot exceed 26
- The depth of a trie depens on the longest word that it stores.
- Another important property of a trie is that is provides the same path for words that share a common prefix. For example, "there" and "their" have a common prefix "the". Hence, they will share the same path until "e". After that, the path will split into two branches. This is the backbone of the trie functionaity.

## The Trie Node Class

The Trie node repressents one alphabet, which keeps pointers to its children nodes, For example, if we want to insert "hello" in the trie, we will need to add 5 **TrieNodes**, one ofr each alphabet. A Typical node in a trie consists of three data members:

- `char`: This stores the character that the node is supposed to contain
- `children[]`: An array which consists of pointers to children nodes The size of this array depens on the number of alphabets. By default, all are set to `null`
- `isEndWord`: a flag to indicate the end of a word. It is set to `false` by default and is only updated when words end during insertion.

## Time Complexity

- **Insertion** For a Key with **N** characters, the worst-case time complexity is O(n) since we need to make **n** iterations
- **Search** If the length of the word is H, the worstcase tie compexity O(h)
