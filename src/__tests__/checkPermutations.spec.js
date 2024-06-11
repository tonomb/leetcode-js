import { checkPermutations } from "../checkPermutations";

describe("Check Permutations", () => {
  it("Should Return True", () => {
    const string1 = "abc";
    const string2 = "cba";

    expect(checkPermutations(string1, string2)).toBe(true);
  });

  it("Should Return True", () => {
    const string1 = "aabb";
    const string2 = "abab";

    expect(checkPermutations(string1, string2)).toBe(true);
  });
  it("Should Return False", () => {
    const string1 = "aabb";
    const string2 = "aabc";

    expect(checkPermutations(string1, string2)).toBe(false);
  });

  it("Should Return False", () => {
    const string1 = "Hello";
    const string2 = "Worl";

    expect(checkPermutations(string1, string2)).toBe(false);
  });
});
