import { isPalindrome } from "../palindromeNum";

describe("Valid Palindrome Number", () => {
  it("should return true", () => {
    const input = 121;
    const output = true;

    expect(isPalindrome(input)).toBe(output);
  });

  it("should return false", () => {
    const input = -121;
    const output = false;

    expect(isPalindrome(input)).toBe(output);
  });

  it("should return false", () => {
    const input = 10;
    const output = false;

    expect(isPalindrome(input)).toBe(output);
  });
});
