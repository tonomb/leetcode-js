import { rightRotate, rightRotateSplice } from "../rightRotateArray";

describe("Right Rotate Array ", () => {
  it("should equal output 0", () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 3;

    const output = [3, 4, 5, 1, 2];

    expect(rightRotate(arr, n)).toEqual(output);
  });

  it("should equal output 1", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const n = 3;

    const output = [5, 6, 7, 1, 2, 3, 4];

    expect(rightRotate(arr, n)).toEqual(output);
  });

  it("should equal output 2", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const n = 6;

    const output = [1, 2, 3, 4, 5, 6];

    expect(rightRotate(arr, n)).toEqual(output);
  });

  it("should equal output 3", () => {
    const arr = [-1, -2, -3, -4, -5];
    const n = 0;

    const output = [-1, -2, -3, -4, -5];

    expect(rightRotate(arr, n)).toEqual(output);
  });

  it("should equal output 4", () => {
    const arr = [1];
    const n = 0;

    const output = [1];

    expect(rightRotate(arr, n)).toEqual(output);
  });

  it("should equal output 5", () => {
    const arr = [10, 12];
    const n = 1;

    const output = [12, 10];

    expect(rightRotate(arr, n)).toEqual(output);
  });
});

describe("Right Rotate Array with splice ", () => {
  it("should equal output 0", () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 3;

    const output = [3, 4, 5, 1, 2];

    expect(rightRotateSplice(arr, n)).toEqual(output);
  });

  it("should equal output 1", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const n = 3;

    const output = [5, 6, 7, 1, 2, 3, 4];

    expect(rightRotateSplice(arr, n)).toEqual(output);
  });

  it("should equal output 2", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const n = 6;

    const output = [1, 2, 3, 4, 5, 6];

    expect(rightRotateSplice(arr, n)).toEqual(output);
  });

  it("should equal output 3", () => {
    const arr = [-1, -2, -3, -4, -5];
    const n = 0;

    const output = [-1, -2, -3, -4, -5];

    expect(rightRotateSplice(arr, n)).toEqual(output);
  });

  it("should equal output 4", () => {
    const arr = [1];
    const n = 0;

    const output = [1];

    expect(rightRotate(arr, n)).toEqual(output);
  });

  it("should equal output 5", () => {
    const arr = [10, 12];
    const n = 1;

    const output = [12, 10];

    expect(rightRotate(arr, n)).toEqual(output);
  });
});
