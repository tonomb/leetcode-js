// Given a string, write a function to check if its a permutation of a plaindrome.
// A palindrome is a workd or phrase that is the same forwards and backwards.
//  A permutation is a rearrangement of letteres. The palindrome does not need to be limited to just dictiornary words.
//  You can ignore casing and non-letter chracters.
// Input 'Tact Coa'
// Output 'True ( permutations: 'taco cat', 'atco cta')

// To be a palindrome you need to have an even number of almost all characters. so that hald can be on once side and half can be on the other side.

// Solution 1
//We use a hash table to count how many times each character appears. Then we iterate through the hash table and ensure that no more than one character has an odd count

function isPermutationOfPalindrome(phrase) {
  const table = buildCharFrequencyTable(phrase);
  return checkMaxOneOdd(table);
}

// Count how many times a char appears
function buildCharFrequencyTable(phrase) {
  const table = new Array(26).fill(0);
  // table [2, 2]
  for (let char of phrase.split("")) {
    const value = getCharNumber(char);
    if (value != -1) {
      table[value]++;
    }
  }
  return table;
}

function getCharNumber(char) {
  const a = parseInt("a", 36);
  const z = parseInt("z", 36);

  let value = parseInt(char, 36);

  if (a <= value && value <= z) {
    return value - a;
  }
  return -1;
}

// [2, 2]
function checkMaxOneOdd(table) {
  let foundOdd = false;

  for (let count of table) {
    if (count % 2 == 1) {
      if (foundOdd) {
        return false;
      }
      foundOdd = true;
    }
  }

  return true;
}

// Time Complecity O(n) n being the length of the pharse
// Space Complexity O(1) fixed array of 26

console.log(isPermutationOfPalindrome("abab"));
console.log(isPermutationOfPalindrome("Tact Coa"));
console.log(isPermutationOfPalindrome("Hello"));

// Solution 2
// We cant optimize big O because we will always have to look through the entire phrase.
// However, we can make some smaller incremental improvements.

// Instead of checking the number of odds at the end we can do it at runtime
function isPermutationOfPalindromeOptimized(phrase) {
  let countOdd = 0;
  const table = new Array(26).fill(0);

  for (let char of phrase.split("")) {
    let index = getCharNumber(char);
    if (index != -1) {
      table[index]++;
      if (table[index] % 2 == 1) {
        countOdd++;
      } else {
        countOdd--;
      }
    }
  }

  return countOdd <= 1;
}

console.log(isPermutationOfPalindrome("abab"));
console.log(isPermutationOfPalindrome("Tact Coa"));
console.log(isPermutationOfPalindrome("Hello"));

// Solution 3
// Use a Set
function isPermutationOfPalindromeSet(phrase) {
  const oddChars = new Set();

  for (let char of phrase.toLowerCase()) {
    const index = getCharNumber(char);
    if (index !== -1) {
      if (oddChars.has(char)) {
        oddChars.delete(char); // Remove if seen twice (even count)
      } else {
        oddChars.add(char); // Add if seen once (odd count)
      }
    }
  }

  return oddChars.size <= 1;
}
