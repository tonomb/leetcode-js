import { reArrange } from "../rearrangePosNeg";

describe("Rearrange Positives and Negatives", () => {
  it("Should return output 0", () => {
    const arr = [10, -1, 20, 4, 5, -9, -6];

    const expected = [-1, -9, -6, 10, 20, 4, 5];

    expect(reArrange(arr)).toEqual(expected);
  });

  it("Should return output 1", () => {
    const arr = [1, -2, 3, -4, 5];

    const expected = [-2, -4, 1, 3, 5];

    expect(reArrange(arr)).toEqual(expected);
  });

  it("Should return output 2", () => {
    const arr = [-7, -2, -9, -5, -3];

    const expected = [-7, -2, -9, -5, -3];

    expect(reArrange(arr)).toEqual(expected);
  });

  it("Should return output 3", () => {
    const arr = [4, 9, 2, 6, 8];

    const expected = [4, 9, 2, 6, 8];

    expect(reArrange(arr)).toEqual(expected);
  });

  it("Should return output 4", () => {
    const arr = [-3, 0, 7, -1, 4];

    const expected = [-3, -1, 0, 7, 4];

    expect(reArrange(arr)).toEqual(expected);
  });

  it("Should return output 0", () => {
    const arr = [];

    const expected = [];

    expect(reArrange(arr)).toEqual(expected);
  });
});
