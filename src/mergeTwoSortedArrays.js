export function mergeTwoLists(list1, list2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let results = [];

  while (pointer1 < list1.length && pointer2 < list2.length) {
    if (list1[pointer1] <= list2[pointer2]) {
      results.push(list1[pointer1]);

      pointer1++;
    } else {
      results.push(list2[pointer2]);
      pointer2++;
    }
  }

  // push remaining elements into array
  while (pointer1 < list1.length) {
    results.push(list1[pointer1]);
    pointer1++;
  }

  while (pointer2 < list2.length) {
    results.push(list2[pointer2]);
    pointer2++;
  }

  return results;
}
// would be T = O(n)  S=O(n) results

// export function mergeTwoLists(list1, list2) {
//   let sortedList = list1.concat(list2);

//   return sortedList.sort((a, b) => a - b);
// }
// Would be O(n Log N)
