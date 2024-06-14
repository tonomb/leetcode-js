// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

export function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      if (maxProfit < profit) {
        maxProfit = profit;
      }
    } else {
      left = right;
    }

    right++;
  }

  return maxProfit;
}

// export function maxProfit(prices) {
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] < prices[j]) {
//         let profit = prices[j] - prices[i];
//         if (profit > maxProfit) {
//           maxProfit = profit;
//         }
//       }
//     }
//   }

//   return maxProfit;
// }

// Time complexity of O(n^2) // loops through entire price array
// Space Complexity O(1)
