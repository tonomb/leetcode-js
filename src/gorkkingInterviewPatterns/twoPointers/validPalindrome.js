export function validPalindrome(string) {
  let pointerA = 0;
  let pointerB = string.length - 1;

  const plindromArray = string.split("");

  while (plindromArray[pointerA] === plindromArray[pointerB]) {
    if (pointerA === pointerB) {
      return true;
    }
    pointerA += 1;
    pointerB -= 1;
  }

  return false;
}
