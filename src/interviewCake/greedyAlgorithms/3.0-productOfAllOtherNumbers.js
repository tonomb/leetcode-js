/*
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Here's the catch: You can't use division in your solution!
*/

const arrayOfInts = [1, 7, 3, 4];
//                      i
//                         j

function getProductsOfAllIntsExceptAtIndex(arrayOfInts) {
  const result = []; // [ 84]

  for (let i = 0; i < arrayOfInts.length; i++) {
    let prod = 1;
    for (let j = 0; j < arrayOfInts.length; j++) {
      if (j != i) {
        prod *= arrayOfInts[j];
      }
    }

    result.push(prod);
  }

  return result;
}

function getProductsOfAllIntsExceptIndex(arrayOfInts) {
  if (arrayOfInts < 2) {
    throw new Error("We need at least 2 integers in the array");
  }

  const productsOfAllIntsExceptIndex = []; // [1, 1, 7 , 21]

  let productsSoFar = 1; // 7
  for (let i = 0; i < arrayOfInts.length; i++) {
    productsOfAllIntsExceptIndex[i] = productsSoFar;
    productsSoFar *= arrayOfInts[i];
  }

  productsSoFar = 1;
  for (let j = arrayOfInts.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptIndex[j] *= productsSoFar;
    productsSoFar *= arrayOfInts[j];
  }

  return productsOfAllIntsExceptIndex;
}
