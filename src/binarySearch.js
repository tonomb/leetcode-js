export function search(nums, target) {
  const binarySearch = (nums, target, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
      return -1;
    }

    let middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (target === nums[middleIndex]) {
      return middleIndex;
    }

    if (target < nums[middleIndex]) {
      return binarySearch(nums, target, leftIndex, middleIndex - 1);
    } else {
      return binarySearch(nums, target, middleIndex + 1, rightIndex);
    }
  };

  return binarySearch(nums, target, 0, nums.length - 1);
}
