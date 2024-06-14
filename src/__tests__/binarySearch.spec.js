import { search } from "../binarySearch";

describe(" Binary Search", () => {
  it("returns 4 , found", () => {
    const nums = [-1, 0, 3, 5, 9, 12];

    expect(search(nums, 9)).toEqual(4);
  });

  it("returns -1 , not", () => {
    const nums = [-1, 0, 3, 5, 9, 12];

    expect(search(nums, 2)).toEqual(-1);
  });
});
