import { findSumOfThree } from "../sumThreeValues";

describe("Find sum of three values", () => {
  it("Case 0: returns true", () => {
    const nums = [3, 7, 1, 2, 8, 4, 5];
    const target = 20;

    expect(findSumOfThree(nums, target)).toBe(true);
  });
  it("Case 1: returns false", () => {
    const nums = [1, -1, 0];
    const target = 1;

    expect(findSumOfThree(nums, target)).toBe(false);
  });
  it("Case 2: returns true", () => {
    const nums = [3, 7, 1, 2, 8, 4, 5];
    const target = 10;

    expect(findSumOfThree(nums, target)).toBe(true);
  });
  it("Case 3: returns false", () => {
    const nums = [3, 7, 1, 2, 8, 4, 5];
    const target = 21;

    expect(findSumOfThree(nums, target)).toBe(false);
  });
  it("Case 4: returns true", () => {
    const nums = [-1, 2, 1, -4, 5, -3];
    const target = -8;

    expect(findSumOfThree(nums, target)).toBe(true);
  });
  it("Case 5: returns true", () => {
    const nums = [-1, 2, 1, -4, 5, -3];
    const target = 0;

    expect(findSumOfThree(nums, target)).toBe(true);
  });
});
