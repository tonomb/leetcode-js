/*
Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.
*/

// In order to have the highest product we need the 3 highest numbers posible.
//
const arrayOfInts = [1, 2, 3];

function highestProductOfThree(arrayOfInts) {
  const sortedArrayOfInts = arrayOfInts.sort((a, b) => b - a); // [ 3 , 2 ,1]

  return sortedArrayOfInts[0] * sortedArrayOfInts[1] * sortedArrayOfInts[2];
}

// Time n log n because of the sorting of the array

const arrayOfIntss = [1, 9, 3, 8, 5, 2, 7, 10, 0]; // 10, 8 , 9
//

function highestProductOfThrees(arrayOfIntss) {
  if (arrayOfInts.length < 3) {
    throw new Error("Less thatn 3 items");
  }

  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  let highestProductOfTwo = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOfTwo = arrayOfInts[0] * arrayOfInts[1];

  let highestProductOfThree = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i];

    highestProductOfThree = Math.max(
      highestProductOfThree,
      current * highestProductOfTwo,
      current * lowestProductOfTwo,
    );

    highestProductOfTwo = Math.max(
      highestProductOfTwo,
      current * highest,
      current * lowest,
    );

    lowestProductOfTwo = Math.min(
      lowestProductOfTwo,
      current * highest,
      current * lowest,
    );

    highest = Math.max(current, highest);

    lowest = Math.min(current, lowest);
  }

  return highestProductOfThree;
}

function highProductOfThrees(arrayOfInts) {
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity;
  let min1 = Infinity,
    min2 = Infinity;

  for (let i = 0; i < arrayOfInts.length; i++) {
    if (arrayOfInts[i] > max1)
      [max3, max2, max1] = [max2, max1, arrayOfInts[i]];
    else if (arrayOfInts[i] > max2) [max3, max2] = [max2, arrayOfInts[i]];
    else if (arrayOfInts[i] > max3) [max3] = [arrayOfInts[i]];

    if (arrayOfInts[i] < min1) [min2, min1] = [min1, arrayOfInts[i]];
    if (arrayOfInts[i] < min2) [min2] = [arrayOfInts[i]];
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}
