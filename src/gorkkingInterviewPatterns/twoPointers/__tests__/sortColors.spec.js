import { sortColors } from "../sortColors";

describe("Sort Colors", () => {
  it("Case 0", () => {
    const input = [1, 0, 2, 1, 2, 2];
    const output = [0, 1, 1, 2, 2, 2];

    expect(sortColors(input)).toEqual(output);
  });

  it("Case 1", () => {
    const input = [1, 1, 0];
    const output = [0, 1, 1];

    expect(sortColors(input)).toEqual(output);
  });
  it("Case 2", () => {
    const input = [1];
    const output = [1];

    expect(sortColors(input)).toEqual(output);
  });
  it("Case 3", () => {
    const input = [2, 2];
    const output = [2, 2];

    expect(sortColors(input)).toEqual(output);
  });
  it("Case 4", () => {
    const input = [1, 1, 0, 2];
    const output = [0, 1, 1, 2];

    expect(sortColors(input)).toEqual(output);
  });
  it("Case 5", () => {
    const input = [2, 1, 1, 0, 0];
    const output = [0, 0, 1, 1, 2];

    expect(sortColors(input)).toEqual(output);
  });
});
