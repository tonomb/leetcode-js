// There are three types of edits that can be performed on strings: Insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit(or zero edis) away.

// Example
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bae -> false

function oneEditAway(first, second) {
  if (first.length == second.length) {
    return oneEditReplace(first, second);
  } else if (first.length + 1 == second.length) {
    return oneEditInsert(first, second);
  } else if (first.length - 1 == second.length) {
    return oneEditInsert(second, first);
  }

  return false;
}

function oneEditReplace(s1, s2) {
  let foundDifference = false;

  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) != s2.charAt(i)) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }

  return true;
}

function oneEditInsert(s1, s2) {
  let index1 = 0;
  let index2 = 0;

  while (index2 < s2.length && index1 < s1.length) {
    if (s1.charAt(index1) != s2.charAt(index2)) {
      if (index1 != index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }

  return true;
}

console.log(oneEditAway("pale", "ple"));
console.log(oneEditAway("pales", "pale"));
console.log(oneEditAway("pale", "bale"));
console.log(oneEditAway("pale", "bae"));

// Time Complexity O(n) because n is the length of the shorter string, we have to iterate over it
// Space Complexity O(1) no extra space is used
