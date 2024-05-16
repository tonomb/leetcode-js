// Write a function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it.

//input = deead
// output = true deed

export function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  const characters = s.split("");

  let count = 0;

  while (left < right) {
    if (characters[left] === characters[right]) {
      left++;
      right--;
    } else if (characters[left + 1] === characters[right]) {
      count++;
      left++;
    } else if (characters[left] === characters[right - 1]) {
      count++;
      right--;
    } else {
      return false;
    }
  }

  console.log(count);

  if (count <= 1) {
    return true;
  } else {
    return false;
  }
}
