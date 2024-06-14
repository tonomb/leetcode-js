import { maxProfit } from "../bestTimeBuySell";

describe("Best time to buy and sell stock", () => {
  it("Should return 5", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const output = 5;

    expect(maxProfit(prices)).toEqual(output);
  });

  it("Should return 0", () => {
    const prices = [7, 6, 4, 3, 2, 1];
    const output = 0;

    expect(maxProfit(prices)).toEqual(output);
  });

  it("Should return 2", () => {
    const prices = [2, 4, 1];
    const output = 2;

    expect(maxProfit(prices)).toEqual(output);
  });
});
