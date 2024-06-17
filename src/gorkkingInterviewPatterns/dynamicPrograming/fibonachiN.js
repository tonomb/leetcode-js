// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// // O(2^n) too slow

// Memoization

// Use a JS Obect to retreive seen numbers
//  Keys will be arg to finally, value will be the return value

const fib = (n, memo = {}) => {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
// O(n)

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
