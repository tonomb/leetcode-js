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
      [colors[start], colors[current]] = [colors[current], colors[start]];
      start++;
      current++;
    } else if (colors[current] === 1) {
      current++;
    } else if (colors[current] === 2) {
      [colors[end], colors[current]] = [colors[current], colors[end]];
      end--;
    }
  }

  return colors;
}

export { sortColors };
