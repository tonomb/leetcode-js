/*

Write a function that takes an array of characters and reverses the letters in place. ↴

Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place.
Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.
*/

const input = ["h", "e", "l", "l", "o"];

function reverseString(charArray) {
  let left = 0;
  let right = charArray.length - 1;

  while (left < right) {
    [charArray[left], charArray[right]] = [charArray[right], charArray[left]];

    left++;
    right--;
  }
}

console.log(input);
reverseString(input);
console.log(input);
