// Problem statement
// Given an integer array, return the maximum subarray sum. The array may contain both positive and negative integers and is unsorted.

// Partial function definition
// let findMaxSumSubArray = function(A) {

//   return -1
// };

// Input
// an array A
// Output
// a number (maximum subarray sum)

// Sample input
// arr = [ -4, 2, -5, 1, 2, 3, 6, -5, 1]
// Sample output
// largest_sum = 12
function findMaxSumSubArray(arr) {
  const arrCopy = [...arr];

  let sumHash = new Map();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!sumHash.has(arr[i])) {
        sumHash.set(arr[i], [sumArray(arrCopy, j + 1)]);
      } else {
        sumHash.get(arr[i]).push(sumArray(arrCopy, j + 1));
      }
    }

    arrCopy.shift();
  }

  let maxSum;
  for (let i = 0; i < arr.length; i++) {
    const subArray = sumHash.get(arr[i]);

    const maxValue = Math.max(...subArray);

    if (maxSum < maxValue || !maxSum) {
      maxSum = maxValue;
    }
  }

  return maxSum;
}
// Time COmplexity O(n^2)

function sumArray(arr, i) {
  let sum = 0;

  for (let j = 0; j < arr.length; j++) {
    if (j < i) {
      sum += arr[j];
    }
  }

  return sum;
}

function kadanesAlgorithm(arr) {
  if (arr.length < 1) {
    return 0;
  }

  let currMax = arr[0];
  let globalMax = arr[0];
  let lengtharr = arr.length;

  for (let i = 1; i < lengtharr; i++) {
    if (currMax < 0) {
      currMax = arr[i];
    } else {
      currMax += arr[i];
    }

    if (globalMax < currMax) {
      globalMax = currMax;
    }
  }

  return globalMax;
}

export { findMaxSumSubArray, kadanesAlgorithm };
