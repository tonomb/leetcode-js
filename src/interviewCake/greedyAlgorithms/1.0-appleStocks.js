/*
Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

For example:

  const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

JavaScript
No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.
*/

const stockPrices = [10, 7, 5, 8, 11, 9];
//                          i     j

function getMaxProfit(stockPrices) {
  let maxProfit = 0; // 6
  let buy; // 2
  let sell; // 4

  for (let i = 0; i < stockPrices.length; i++) {
    for (let j = i + 1; j < stockPrices.length; j++) {
      const profit = stockPrices[j] - stockPrices[i]; //11 - 5 = 6

      if (profit > maxProfit) {
        // 6 > 3
        maxProfit = profit;
        buy = i;
        sell = j;
      }
    }
  }

  return {
    profit,
    buy: stockPrices[buy],
    sell: stockPrices[sell],
  };
}

//{ profit: 6, buy: 5, sell: 11 };

// Time O(n^2) because we are looping twice
// Space O(1)

// To beat brute force we can either go N log N which means sorting the array or O(n) in one pass.

// const stockPrices = [10, 7, 5, 8, 11, 9];
//                                       i

function maxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error("We need a minimum of 2 prices to return a profit");
  }

  let maxProfit = stockPrices[1] - stockPrices[0]; // 6
  let minStockPrice = stockPrices[0]; // 5

  for (let i = 1; i < stockPrices.length; i++) {
    if (stockPrices[i] < minStockPrice) {
      // 11 < 5
      minStockPrice = stockPrices[i];
    } else {
      const profit = stockPrices[i] - minStockPrice; // 11 - 5 = 6

      maxProfit = Math.max(profit, maxProfit);
    }
  }

  return maxProfit;
}

// Time O(1)
// Space O(1)
