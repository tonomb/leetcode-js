// Problem Statement
// Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left, and all positive elements appear at the right.

// While zero is NOT positive or negative, we consider zero to be a positive​ integer for this challenge!

// Input
// An array containing positive and negative elements

// Output
// A sorted array with negative elements at the left and positive elements at the right

// Sample Input
// [10,-1,20,4,5,-9,-6]

// Sample Output
// [-1,-9,-6,10,20,4,5]

//Note: The order of the numbers is not important as long as all negative numbers are contiguous to the left and positive ones on the right.

function reArrange(arr) {
  const negNumbers = arr.filter((number) => number < 0);
  const posNumbers = arr.filter((number) => number >= 0);

  return [...negNumbers, ...posNumbers];
}

// Time Complexity O(n)

function reArrangeSort(arr) {
  return arr.sort((a, b) => a - b);
}
// Time Complexity O(n)

export { reArrange, reArrangeSort };
