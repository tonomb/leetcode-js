/*
Write an efficient function that checks whether any permutation of an input string is a palindrome.

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
"But 'ivicc' isn't a palindrome!"

If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome.
Spend some extra time ensuring you fully understand the question before starting.
Jumping in with a flawed understanding of the problem doesn't look good in an interview.
*/

// In order for a string to be a palindrome each character has to be present an even number of times.
// At Most 1 character can be odd.
// c = 2
// i = 2
// v = 1
function checkPermutationOfPalindrome(str) {
  // use a set to keep trak of characters
  // if even delete from set
  // if odd keep in set
  // once we complete the loop check length of set should be < 1

  const charSet = new Set(); // {  v , d }

  for (let char of str) {
    if (!charSet.has(char)) {
      charSet.add(char);
    } else if (charSet.has(char)) {
      charSet.delete(char);
    }
  }

  return charSet.size <= 1;
}

const str = "ivicc";

console.log(checkPermutationOfPalindrome(str));

// Time Complexity O(n)  n is the size of the string
// Space O(n) worst case all the string is different,  there is a limited number of characters in ASCII so we could say the set is limited O(n)
