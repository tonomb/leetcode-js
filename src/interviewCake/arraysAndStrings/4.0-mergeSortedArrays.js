/*

In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

  const myArray = [3, 4, 6, 10, 11, 15];   // [1 ,2]
                                         f
const alicesArray = [1, 5, 8, 12, 14, 19];  // [ 3, 4,5,6,7,8]
                                      f
console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

function mergeArrays(firstArray, secondArray) {
  let mergedArray = [];

  let firstIndex = 0;
  let secondIndex = 0;

  while (
    firstIndex <= firstArray.length - 1 &&
    secondIndex <= secondArray.length - 1
  ) {
    if (firstArray[firstIndex] < secondArray[secondIndex]) {
      // 15 < 19

      mergedArray.push(firstArray[firstIndex]);

      firstIndex++;
    } else {
      // 5 < 6
      mergedArray.push(secondArray[secondIndex]);

      secondIndex++;
    }
  }

  // If anything remains push to merged array.
  if (firstIndex <= firstArray.length - 1) {
    const remaining = firstArray.slice(firstIndex);
    mergedArray = [...mergedArray, ...remaining];
  }

  if (secondIndex <= secondArray.length - 1) {
    const remaining = secondArray.slice(secondIndex);
    mergedArray = [...mergedArray, ...remaining];
  }

  return mergedArray;
}

// we cant to better the O(n) we need to check all vaulues in both arrays.
//
// Readability, add arrays and sort them O ( n log n)

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));

// Time Complexity O(n) where n is the larger array
// Spcae Complexity O(n + m) which is the length of array 1 + length of array 2
// we use extra space with the slice
// we could do it inline just iterating over the remaining array and pushing
