

// Problem Statement 
// Implement a function findSecondMaximum(arr), which returns the second largest element in the array.

// Note 1: Input array will contain at least two unique elements.

// Note 2: Input array will not contain Number.NEGATIVE_INFINITY value.

// Input 
// An array of integers

// Output 
// The second largest element in the array

// Sample Input 
// [9,2,3,6]
// Sample Output 
// 6

function findSecondMaximumSort(arr) {

    // sort array from biggest to smallest
    let sortedArray = arr.sort( (a , b) => b -a)

    // Remove duplicate Values 
    let filteredArray = []

    for(let i = 0 ; i < sortedArray.length ; i++){

        if(sortedArray[i] != sortedArray[i+1]){
            filteredArray.push(sortedArray[i])
        }
    }

    // return value at index 1
    return filteredArray[1];
}

function findSecondMaximum(arr) {

    let maxValue = arr[0]
    let secondMaxValue = arr[1]

    // traverse array 
    for(let i = 0 ; i < arr.length; i++){

        let value = arr[i]

        if( value > maxValue){
            secondMaxValue = maxValue
            maxValue = value
        }
        if( value < maxValue && value > secondMaxValue){
            secondMaxValue = value
        }
    }
    // keep track of largest value and secondLargest value
    // check current value if gte o lte assign to second largest

    return secondMaxValue
}
// Time Complexity O(n) sort function 

export { findSecondMaximum, findSecondMaximumSort };