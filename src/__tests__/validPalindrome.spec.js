import { isPalindrome } from "../validPalindrome";

describe("Is Valid Palindrome", () => {
  it("Should Return true", () => {
    const str = "A man, a plan, a canal: Panama";

    expect(isPalindrome(str)).toEqual(true);
  });

  it("Should Return false", () => {
    const str = "Hello World";

    expect(isPalindrome(str)).toEqual(false);
  });

  it("Should Return true", () => {
    const str = "";

    expect(isPalindrome(str)).toEqual(true);
  });
});
