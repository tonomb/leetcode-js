import { isPalindrome } from "../isPalindrome";

describe("Is Valid Palindrome II", () => {
  //   it("Case 0: Return true", () => {
  //     const input = "deead";
  //     const output = true;

  //     expect(isPalindrome(input)).toBe(output);
  //   });

  //   it("Case 1: Return true", () => {
  //     const input = "madame";
  //     const output = true;

  //     expect(isPalindrome(input)).toBe(output);
  //   });

  //   it("Case 2: Return true", () => {
  //     const input = "dead";
  //     const output = true;

  //     expect(isPalindrome(input)).toBe(output);
  //   });

  //   it("Case 3: Return true", () => {
  //     const input = "abca";
  //     const output = true;

  //     expect(isPalindrome(input)).toBe(output);
  //   });

  //   it("Case 4: Return false", () => {
  //     const input = "tebbem";
  //     const output = false;

  //     expect(isPalindrome(input)).toBe(output);
  //   });

  it("Case 5: Return true", () => {
    const input =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVgVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba";
    const output = true;

    expect(isPalindrome(input)).toBe(output);
  });
});
