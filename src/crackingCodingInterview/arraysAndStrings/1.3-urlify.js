// Write a method to replace all spaces in a string with '%20'
// You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.

// Input:  'Mr John Smith    ' 13
// Output: 'Mr%20John%20Smith'

// A common approach in string manipulation problems is to edit the string starting from the end and working backwards. This is useful because we have an extra buffer at the end, which allows us to change characters without worying about what we are overwriting.
// We will use this approach in this problem. First, we count the number of spaces. We need two extra spaced per ' ' so we double this count. Then we walk backwards through the string, editing it. When we see a space, we replace it with %20. If there is no space we copy the original character.

function replaceSpaces(string, trueLength) {
  const str = string.split("");
  const numberOfSpaces = countOfChar(str, 0, trueLength, " ");
  let newIndex = trueLength - 1 + numberOfSpaces * 2;

  if (newIndex + 1 < str.length) {
    str[newIndex + 1] = "\0";
  }

  for (let oldIndex = trueLength - 1; oldIndex >= 0; oldIndex--) {
    if (str[oldIndex] == " ") {
      // insert '%20
      str[newIndex] = "0";
      str[newIndex - 1] = "2";
      str[newIndex - 2] = "%";
      newIndex -= 3;
    } else {
      str[newIndex] = str[oldIndex];
      newIndex--;
    }
  }

  return str.join("");
}

function countOfChar(str, start, end, target) {
  let count = 0;
  for (let i = start; i < end; i++) {
    if (str[i] == target) {
      count++;
    }
  }

  return count;
}

console.log(replaceSpaces("Mr John Smith    ", 13));

// Time Complexity 0(n) n being the length of the string
// Space Complexity O(n) converting string to array

// Alternative use built in replace

function replaceSpace(string, trueLength) {
  return string.slice(0, trueLength).replace(/ /g, "%20");
}

// Time complexity O(n)
// Space complexity O(1) replace is eficient with native strings

console.log(replaceSpace("Mr John Smith    ", 13));
