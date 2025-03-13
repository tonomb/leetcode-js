/*
You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
*/

// Solution 1 Brute Force
const flightLength = 10;
const movieLengths = [1, 3, 5, 7];

function watchTwoMovies(flightLength, movieLengths) {
  for (let i = 0; i < movieLengths.length; i++) {
    let lookup = flightLength - movieLengths[i];

    for (let j = i + 1; j < movieLengths.length; j++) {
      if (movieLengths[j] == lookup) {
        return true;
      }
    }
  }

  return false;
}

console.log(watchTwoMovies(flightLength, movieLengths));

// Time O(n^2) for the double loop
// space O(1) no extra space used

function watchTwoMoviesOptimized(flightLength, movieLengths) {
  const neededMovieLengths = new Set(); // { 1, 3 , 5 }

  for (let movieLength of movieLengths) {
    let neededMovieLength = flightLength - movieLength; //10 - 7 = 3

    if (neededMovieLengths.has(neededMovieLength)) {
      return true;
    }

    neededMovieLengths.add(movieLength);
  }

  return false;
}

// Time O(n) n being the length of the availabeMovies
// Space O(n) n being the length of the movies due to the set.

// Bonus 1: What if we wanted the movie lengths to sum to something close to the flight length (say, within 20 minutes)?

function watchTwoMoviesOptimized(flightLength, movieLengths, buffer) {
  const neededMovieLengths = new Set(); // { 1, 3 , 5 }

  for (let movieLength of movieLengths) {
    let neededMovieLength = flightLength - movieLength; //10 - 7 = 3

    for (let diff = 0; diff <= buffer; diff++) {
      if (neededMovieLengths.has(neededMovieLength - buffer)) {
        return true;
      }
    }

    neededMovieLengths.add(movieLength);
  }

  return false;
}
// for this solution the time complexity if still O(n) because the inner loop is caped at a buffer. but  it also could be o(n^2) if the buffer is the same as the flight length

// Bonus 2: What if we wanted to fill the flight length as nicely as possible with any number of movies (not just 2)?

// Bonus 3: What if we knew that movieLengths was sorted? Could we save some space and/or time?

const sortedMovieLengths = [2, 3, 5, 9];

function watchTwoMoviesSorted(flightLength, movieLengths) {
  let right = movieLengths.length - 1;
  let left = 0;

  while (left < right) {
    let neededLength = flightLength - movieLengths[left]; // 10 - 3  = 7

    if (movieLengths[right] == neededLength) {
      // 7 = 7
      return true;
    }

    if (movieLengths[right] < neededLength) {
      // 7 < 9
      left++;
    } else {
      right--;
    }
  }

  return false;
}

// Time O(n)
// space O(1)
