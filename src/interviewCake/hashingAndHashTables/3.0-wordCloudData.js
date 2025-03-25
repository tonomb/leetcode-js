/*
You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map,
where the keys are words and the values are the number of times the words occurred.

We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts.
And it'll be easier and cleaner when we want to iterate over our data.

Think about capitalized words. For example, look at these sentences:

"After beating the eggs, Dana read the next step:"
"Add milk and eggs, then add flour and sugar."

What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 2.
Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

Assume the input will only contain words and standard punctuation.

You could make a reasonable argument to use regex in your solution.
We won't, mainly because performance is difficult to measure and can get pretty bad.
*/

const phrase = "After beating the eggs, Dana read the next step:";

function buildWordCloudData(phrase) {
  const phraseArray = phrase.split(" "); // [After, beating, the, 'eggs,' ]

  const wordCloud = new Map(); // { 'After': 1 , 'beating: 1 .. }

  for (let word of phraseArray) {
    if (!wordCloud.has(word)) {
      wordCloud.set(word, 1);
    } else {
      const value = wordCloud.get(word);
      wordCloud.set(word, value + 1);
    }
  }

  return wordCloud;
}

// Time O(n) worst case every word is unique
// Space O(n) worst case every word is unique

class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    // Iterate over each character in the input string, splitting
    // words and passing them to this.addWordToMap()

    let currentWordStartIndex = 0;
    let currentWordLength = 0;

    for (let i = 0; i < inputString.length; i++) {
      const character = inputString.charAt(i);

      // if we reached the end of the string we check if the last
      // character is a letter and add the last word to out map

      if (i === inputString.length - 1) {
        if (this.isLetter(character)) {
          currentWordLength += 1;
        }
        if (currentWordLength > 0) {
          const word = inputString.slice(
            currentWordStartIndex,
            currentWordStartIndex + currentWordLength,
          );
          this.addWordToMap(word);
        }

        // if we reach a space or a emdash we know we're at the end of a word
        // so we add it to our map and reset our current word
      } else if (character === " " || character === "\u2014") {
        if (currentWordLength > 0) {
          const word = inputString.slice(
            currentWordStartIndex,
            currentWordStartIndex + currentWordLength,
          );
          this.addWordToMap(word);
          currentWordLength = 0;
        }

        // we ant to make sure we split on ellipses so if we get two periods in a row
        // we add the current word to our map and reset out current word
      } else if (character === ".") {
        if (i < inputString.length - 1 && inputString.charAt(i + 1) === ".") {
          if (currentWordLength > 0) {
            const word = inputString.slice(
              currentWordStartIndex,
              currentWordStartIndex + currentWordLength,
            );
            this.addWordToMap(word);
            currentWordLength = 0;
          }
        }

        // if the character is a letter or an apostrophe, we add it to our current word
      } else if (this.isLetter(character) || character === "'") {
        if (currentWordLength === 0) {
          currentWordStartIndex = i;
        }

        currentWordLength += 1;
        // if the character is a hyphen, we want to check if its surrounded by letters
        // if it is, we add it to our current word
      } else if ((character = "-")) {
        if (
          i > 0 &&
          this.isLetter(inputString.charAt(i + 1)) &&
          this.isLetter(inputString.charAt(i - 1))
        ) {
          currentWordLength += 1;
        } else {
          if (currentWordLength > 0) {
            const word = inputString.slice(
              currentWordStartIndex,
              currentWordStartIndex + currentWordLength,
            );
            this.addWordToMap(word);
            currentWordLength = 0;
          }
        }
      }
    }
  }

  addWordToMap(word) {
    let newCount;

    // if the word is already in the map we increment its count
    if (this.wordsToCounts.has(word)) {
      newCount = this.wordsToCounts.get(word) + 1;
      this.wordsToCounts.set(word, newCount);

      // if a lowercase version is in the map, we know our input word must be uppercase
      // but we only include uppercase words if they're always uppercase
      // se we just increment the lowrcase verions count
    } else if (this.wordsToCounts.has(word.toLowerCase())) {
      newCount = this.wordsToCounts.get(word.toLowerCase()) + 1;
      this.wordsToCounts.set(word.toLowerCase(), newCount);

      // if an upercse version is in the map, we know our input word must be lowercase
      // since w only include uppercase words if theyre always uppercase
      // we add the lowercase verion and give it the uppercase count
    } else if (this.wordsToCounts.has(this.capitalize(word))) {
      newCount = this.wordsToCounts.get(this.capitalize(word) + 1);
      this.wordsToCounts.set(word, newCount);
      this.wordsToCounts.delete(this.capitalize(word));

      // otherwise the word is not in the map at all
      // so we add it
    } else {
      this.wordsToCounts.set(word, 1);
    }
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  isLetter(character) {
    return (
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(
        character,
      ) >= 0
    );
  }
}
