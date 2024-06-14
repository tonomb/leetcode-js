export function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^0-9a-z]/gi, "");

  let checkPalindrome = cleanStr.split("");

  let left = 0;
  let right = checkPalindrome.length - 1;

  while (left < right) {
    if (checkPalindrome[left] != checkPalindrome[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Time complexity O(n) // 1 pass through the string array
// Space O(n) // checkPalindrome depends on string length
