import { findMaxSumSubArray, kadanesAlgorithm } from "../maxSumSubarray";

describe("Find Max Sub Array", () => {
  it("should return 33", () => {
    const arr = [-2, 10, 7, -5, 15, 6];
    const largestSum = 33;

    expect(findMaxSumSubArray(arr)).toEqual(largestSum);
  });

  it("should return 12", () => {
    const arr = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
    const largestSum = 12;

    expect(findMaxSumSubArray(arr)).toEqual(largestSum);
  });

  it("should return 1", () => {
    const arr = [1];
    const largestSum = 1;

    expect(findMaxSumSubArray(arr)).toEqual(largestSum);
  });

  it("should return 8", () => {
    const arr = [-2, 1, -3, 4, 1, -1, 2, 1, -3, 4, -2, -5];
    const largestSum = 8;

    expect(findMaxSumSubArray(arr)).toEqual(largestSum);
  });

  it("should return 16", () => {
    const arr = [-10, 2, 9, 4, -6, -3, 1, 2, 4, -3, 6];
    const largestSum = 16;

    expect(findMaxSumSubArray(arr)).toEqual(largestSum);
  });

  it("should return -2", () => {
    const arr = [-3, -2, -8, -7, -6, -4, -6, -3];
    const largestSum = -2;

    expect(findMaxSumSubArray(arr)).toEqual(largestSum);
  });
});

describe("with kadanesAlgorithm", () => {
  it("should return 33", () => {
    const arr = [-2, 10, 7, -5, 15, 6];
    const largestSum = 33;

    expect(kadanesAlgorithm(arr)).toEqual(largestSum);
  });

  it("should return 12", () => {
    const arr = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
    const largestSum = 12;

    expect(kadanesAlgorithm(arr)).toEqual(largestSum);
  });

  it("should return 1", () => {
    const arr = [1];
    const largestSum = 1;

    expect(kadanesAlgorithm(arr)).toEqual(largestSum);
  });

  it("should return 8", () => {
    const arr = [-2, 1, -3, 4, 1, -1, 2, 1, -3, 4, -2, -5];
    const largestSum = 8;

    expect(kadanesAlgorithm(arr)).toEqual(largestSum);
  });

  it("should return 16", () => {
    const arr = [-10, 2, 9, 4, -6, -3, 1, 2, 4, -3, 6];
    const largestSum = 16;

    expect(kadanesAlgorithm(arr)).toEqual(largestSum);
  });

  it("should return -2", () => {
    const arr = [-3, -2, -8, -7, -6, -4, -6, -3];
    const largestSum = -2;

    expect(kadanesAlgorithm(arr)).toEqual(largestSum);
  });
});
