// Problem Statement
// Implement a function called maxMin(arr), which will rearrange the elements of a sorted array so that the first position will have the largest number, the second will have the smallest, and the third will have the second-largest and so on. In other words, all the odd-numbered indices will have the largest numbers in the array in descending order, and the even-numbered indices will have the smallest numbers in ascending order.

// Note: The given array is sorted in ascending order.

// Input
// A sorted array

// Output
// An array with elements stored in max/min form

// Sample Input
// const arr = [1,2,3,4,5]
// Sample Output
// arr = [5,1,4,2,3]

function maxMin(arr) {
  const sortedArray = [];
  let count = 0;

  while (arr.length > 0) {
    if (count % 2 === 0) {
      const lastNum = arr.pop();
      sortedArray.push(lastNum);
    } else {
      const firsNum = arr.shift();
      sortedArray.push(firsNum);
    }

    count += 1;
  }
  return sortedArray;
}

// Time complexity O(n) - iterates once though the array

export { maxMin };
