import { checkIfUnique } from "../isUnique.js";

describe(" Is Unique ", () => {
  it("should return false", () => {
    const input = "Hello World";
    const output = false;

    expect(checkIfUnique(input)).toBe(output);
  });

  it("Should return true", () => {
    const input = "abcd";
    const output = true;
    expect(checkIfUnique(input)).toBe(output);
  });

  it("Handle empty string", () => {
    const input = "";
    const output = true;
    expect(checkIfUnique(input)).toBe(output);
  });
});
