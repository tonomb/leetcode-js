// Check Permutations. Given two strings, write a method to decide if one is a permutation of the other.

//Example  string1 = 'abc'   string2 = 'bca'  -> True
//Example2 string1 = 'Hello' string2='world' -> False

export function checkPermutations(string1, string2) {
  //in order to be a permutation it would have to have the same number of characters
  //all characters should appear the same number of times.
  //

  if (string1.length != string2.length) {
    return false;
  }

  const charCount = new Map();

  for (const character of string1) {
    if (!charCount.has(character)) {
      charCount.set(character, 1);
    } else {
      const value = charCount.get(character);
      charCount.set(character, value + 1);
    }
  }

  for (const character of string2) {
    if (!charCount.has(character)) {
      return false;
    } else {
      const value = charCount.get(character);
      charCount.set(character, value - 1);
      if (charCount.get(character) === 0) {
        charCount.delete(character);
      }
    }
  }

  return charCount.size === 0;
}

// Time Complexity O(n) - iterates strings once
// Space COmplexity O(n) - worst case insets all characters into map

function checkPermutationsAlt(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }

  const sortString1 = string1.split("").sort().join(); // sorting is n log n

  const sortString2 = string2.split("").sort().join();

  return sortString1 === sortString2;
}

// Time Complexity O(n log n) for the js sorting functions
// space complexity O(n) because of space needed for arrays
