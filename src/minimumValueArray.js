// Problem Statement 
// Implement a function findMinimum(arr) that finds the smallest number in the given array.

// Input 
// An array of integers

// Output 
// The smallest number in the array

// Sample Input 
// arr = [9,2,3,6]

// Sample Output 
// 2

function findMinimum(arr) {

   let min  = arr[0]

   arr.forEach( element => {
    if(element < min){
        min = element
    }
   })

   return min
}

// Time Complexity O(n) - one time through array


function findMinimumAlt(arr){
    return Math.min(...arr)
}
// Time Complexity O(n) - one time through array

function findMinimumSort(arr){
    arr.sort( (a,b) => {
        return a - b
    })

    return arr[0]
}

// Time Complexity O(nLogn) - Sort functions take nlogn time

export { findMinimum, findMinimumAlt, findMinimumSort };