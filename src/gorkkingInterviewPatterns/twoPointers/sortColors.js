// Given an array, colors, which contains a combination of the following three elements:
// 0(representing red)
// 1(representing white)
// 2(representing blue)
// Sort the array in place so that the elements of the same color are adjacent, with the colors in the order of red, white, and blue. To improve your problem-solving skills, do not utilize the built-in sort function.

// Sample Input [ 1,0,2,1,2,2]
// sample Output [ 0,1,1,2,2,2]

function sortColors(colors) {
  // Write your code here

  let start = 0;
  let end = colors.length - 1;
  let current = 0;

  for (let i = 0; i < colors.length; i++) {
    if (colors[current] === 0) {
      const tempStart = colors[start];
      const tempCurrent = colors[current];
      colors[start] = tempCurrent;
      colors[current] = tempStart;

      start++;
      current++;
    } else if (colors[current] === 1) {
      current++;
    } else if (colors[current] === 2) {
      const tempEnd = colors[end];
      const tempCurrent = colors[current];

      colors[end] = tempCurrent;
      colors[current] = tempEnd;
      end--;
    }
  }

  return colors;
}

export { sortColors };
