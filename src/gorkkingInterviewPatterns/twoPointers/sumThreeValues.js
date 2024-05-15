export function findSumOfThree(nums, target) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1;
    let high = nums.length - 1;
    while (low < high) {
      let total = nums[i] + nums[low] + nums[high];

      if (total === target) {
        return true;
      }

      if (total < target) {
        low += 1;
      } else {
        high -= 1;
      }
    }
  }

  return false;
}
