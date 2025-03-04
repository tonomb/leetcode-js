// Given two strings, write a method to decide if one is a permutation of the other.

// We should ask if the comparison is case sensitive. That is: is GOD a permutation of dog?
// We should also ask if whitespace is significant.. We will assume that the compaison is case sensitive and whitspace is significant:
// EX 'god     ' != dog

// Strings of different lengths cant be equal to one another.

// Solution 1, sort the string

function sort(str) {
  return str.split("").sort().join();
}
function checkPermutationSorted(str, per) {
  if (str.length != per.length) {
    return false;
  }

  return sort(str) === sort(per);
}

console.log(checkPermutationSorted("god", "dog"));

// Time Complexity = O(n log(n)) sort has a n log n time
// Space Complecity O(n) because split creates a new array.

// Solution 2, Check if strings have identicall characters

function checkPermutationChars(str, per) {
  if (str.length != per.length) return false;

  const letters = Array(128).fill(0);
  // [0,0,0]

  for (let i = 0; i < str.length; i++) {
    const index = str.charCodeAt(i);
    letters[index] += 1;
    // [1,1,1]
  }

  for (let j = 0; j < per.length; j++) {
    const index = per.charCodeAt(j);
    letters[index] -= 1;
    // [1,1,0]
    if (letters[index] < 0) {
      return false;
    }
  }

  return true;
}

console.log(checkPermutationChars("dog", "god"));
console.log(checkPermutationChars("hello", "world"));

// Time Complecity = O (n) loop through the entire string
// Space Complecity = O (1) letters array will be constant
