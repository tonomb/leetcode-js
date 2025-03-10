/*

You're working on a secret team solving coded transmissions.

Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault.
The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

*/

const message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l",
];

function reverseWords(message) {
  reverseCharacters(message, 0, message.length - 1);
  // unscramble the words

  let start = 0;
  for (let i = 0; i <= message.length; i++) {
    // found word end
    if (message[i] == " " || message.length == i) {
      reverseCharacters(message, start, i - 1);
      start = i + 1;
    }
  }
}

function reverseCharacters(message, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    [message[rightIndex], message[leftIndex]] = [
      message[leftIndex],
      message[rightIndex],
    ];

    leftIndex++;
    rightIndex--;
  }
}

reverseWords(message);
console.log(message.join(""));
// Prints: 'steal pound cake'

// Time Complexity: O(n) loop through the whole message
// Space O(1) run in place
