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
