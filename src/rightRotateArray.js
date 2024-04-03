// Problem Statement
// Implement a function rightRotate(arr,n) that will rotate the given array by n.

// Input
// An array and a number by which to rotate that array

// Output
// The given array rotated by n elements

// Sample Input
// arr = [1,2,3,4,5]
// n = 3
// Sample Output
// arr = [3,4,5,1,2]

function rightRotate(arr, n) {
  // Replace this placeholder return statement with your code

  let i = 0;
  while (i < n) {
    let numToMove = arr.pop();
    arr.unshift(numToMove);

    i++;
  }

  return arr;
}
// Time complexity O(n), array is iterated over once

function rightRotateSplice(arr, n) {
  // Replace this placeholder return statement with your code

  const part1 = arr.splice(arr.length - n);

  return [...part1, ...arr];
}
// Time Complexity O(n)

export { rightRotate, rightRotateSplice };
