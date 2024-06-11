// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data strucutres?

export function checkIfUnique(str) {
  const arr = str.split("");
  const seenChar = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!seenChar.has(arr[i])) {
      seenChar.set(arr[i]);
    } else {
      return false;
    }
  }

  return true;
}

// Time complexity O(n)
//  Space Complexity O(n)
