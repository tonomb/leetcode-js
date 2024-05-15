import { validPalindrome } from "../validPalindrome";

describe("Valid Palindrome", () => {
  it("case 0 -> true", () => {
    const palindrome = "abcba";
    expect(validPalindrome(palindrome)).toBe(true);
  });
  it("case 1 -> true", () => {
    const palindrome = "kaYak";
    expect(validPalindrome(palindrome)).toBe(true);
  });
  it("case 2 -> false", () => {
    const palindrome = "hello";
    expect(validPalindrome(palindrome)).toBe(false);
  });
  it("case 3 -> false", () => {
    const palindrome = "RaCEACAR";
    expect(validPalindrome(palindrome)).toBe(false);
  });
  it("case 4 -> true", () => {
    const palindrome = "a";
    expect(validPalindrome(palindrome)).toBe(true);
  });
  it("case 5 -> true", () => {
    const palindrome = "ABCDABCD";
    expect(validPalindrome(palindrome)).toBe(false);
  });
});
