import { mergeTwoLists } from "../mergeTwoSortedArrays";

describe(" Merge Two Sorted Lists", () => {
  it("should return [1, 1, 2, 3, 4, 4]", () => {
    const list1 = [1, 2, 4];
    const list2 = [1, 3, 4, 5, 6, 7, 8];

    const output = [1, 1, 2, 3, 4, 4, 5, 6, 7, 8];

    expect(mergeTwoLists(list1, list2)).toEqual(output);
  });
  it("should return []", () => {
    const list1 = [];
    const list2 = [];

    const output = [];

    expect(mergeTwoLists(list1, list2)).toEqual(output);
  });
  it("should return [0]", () => {
    const list1 = [];
    const list2 = [0];

    const output = [0];

    expect(mergeTwoLists(list1, list2)).toEqual(output);
  });
});
