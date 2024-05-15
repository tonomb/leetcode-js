import { reverseWords } from "../reverseWordsString";

describe("Reverse words on string", () => {
  it("case 0:", () => {
    const input = "reverse this string";
    const output = "string this reverse";

    expect(reverseWords(input)).toEqual(output);
  });

  it("case 1:", () => {
    const input = "We love JavaScript";
    const output = "JavaScript love We";

    expect(reverseWords(input)).toEqual(output);
  });

  it("case 2:", () => {
    const input = "1234 abc XYZ";
    const output = "XYZ abc 1234";

    expect(reverseWords(input)).toEqual(output);
  });

  it("case 3:", () => {
    const input = "You are amazing";
    const output = "amazing are You";

    expect(reverseWords(input)).toEqual(output);
  });

  it("case 4:", () => {
    const input = "Hello     World";
    const output = "World Hello";

    expect(reverseWords(input)).toEqual(output);
  });

  it("case 5:", () => {
    const input = "Greeting123";
    const output = "Greeting123";

    expect(reverseWords(input)).toEqual(output);
  });
});
