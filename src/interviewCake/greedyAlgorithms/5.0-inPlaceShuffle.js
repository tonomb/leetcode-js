/*
Write a function for doing an in-place shuffle of an array.

The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.
*/

const arrayOfInts = [1, 2, 3, 4];

function shuffleInPlace(arrayOfInts) {
  if (arrayOfInts.length <= 1) return;

  for (let i = 0; i < arrayOfInts.length - 1; i++) {
    const random = getRandom(i, arrayOfInts.length - 1);

    if (random != i) {
      [arrayOfInts[i], arrayOfInts[random]] = [
        arrayOfInts[random],
        arrayOfInts[i],
      ];
    }
  }
}

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
