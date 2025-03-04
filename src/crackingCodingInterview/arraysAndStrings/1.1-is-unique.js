// Implement an algorithm to determine if a string has all unique characters. What if you cannot use aditional structures?

function isUniqueChars(str) {
  if (str.length > 128) return false;

  const char_set = Array(128).fill(false);
  for (let i = 0; i < str.length; i++) {
    const val = str.charCodeAt(i);
    if (char_set[val]) {
      return false;
    }
    char_set[val] = true;
  }
  return true;
}

console.log(isUniqueChars("name"));

// Time Complecity O(n) where n is the length of the string.
// Space Complecity O(1)
