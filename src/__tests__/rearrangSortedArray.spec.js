import { maxMin } from "../rearrangeSortedArray";

describe("Rearrange sorted array in max/min from", () => {
  it("should return output 0", () => {
    const arr = [1, 2, 3, 4, 5];
    const output = [5, 1, 4, 2, 3];

    expect(maxMin(arr)).toEqual(output);
  });

  it("should return output 1", () => {
    const arr = [2, 4, 6, 8, 10];
    const output = [10, 2, 8, 4, 6];

    expect(maxMin(arr)).toEqual(output);
  });

  it("should return output 2", () => {
    const arr = [5, 10, 15, 20];
    const output = [20, 5, 15, 10];

    expect(maxMin(arr)).toEqual(output);
  });

  it("should return output 3", () => {
    const arr = [3, 7, 14, 18];
    const output = [18, 3, 14, 7];

    expect(maxMin(arr)).toEqual(output);
  });

  it("should return output 4", () => {
    const arr = [8, 8, 8, 8, 8, 8];
    const output = [8, 8, 8, 8, 8, 8];

    expect(maxMin(arr)).toEqual(output);
  });

  it("should return output 5", () => {
    const arr = [];
    const output = [];

    expect(maxMin(arr)).toEqual(output);
  });
});
