export var isPalindrome = function (x) {
  const num = String(x);
  const numArr = num.split("");

  let left = 0;
  let right = numArr.length - 1;

  while (left < right) {
    if (numArr[left] != numArr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
