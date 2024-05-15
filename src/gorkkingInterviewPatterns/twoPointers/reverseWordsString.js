// given a sentence, reverse the order of its words without affecting the order of letters within the given word.

// input = 'reverse this string
// output = 'string this reverse

// function reverseWords(sentence) {
//   const words = sentence.split(" ");

//   let reversedSentance = "";
//   for (let i = words.length - 1; i >= 0; i--) {
//     reversedSentance += `${words[i]} `;
//   }

//   return reversedSentance.trim();
// }

function reverseWords(sentence) {
  let sentenceClean = sentence.replace(/\s+/g, " ").trim();
  const words = sentenceClean.split(" ");

  let left = 0;
  let right = words.length - 1;

  while (left <= right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }

  return words.join(" ");
}

export { reverseWords };
