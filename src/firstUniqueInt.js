// Problem Statement 
// Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.

// Note: The function should return null if no unique number is found.

// Input 
// An array of integers

// Output 
// The first unique element in the array

// Sample Input 
// [9,2,3,2,6,6]
// [4,5,1,2,0,4]
// Sample Output 
// 9
// 5
function findFirstUnique(arr) {

   let index2

   for( let index1 = 0 ; index1 < arr.length ; index1 ++){
     index2 = 0
     while( index2 < arr.length){
        if( index1 != index2 && arr[index1] == arr[index2]){
            break
        }
        index2+= 1
     }

     if( index2 === arr.length){
        return arr[index1]
     }

   }
   return null
}

// Time Complexity O(n^2)


function findFirstUniqueHash(arr) {

   const hashTable = new Map()

   for( let i = 0; i < arr.length ; i++){

        if(hashTable.get(arr[i]) != null){
            hashTable.set(arr[i], 0)
        } else {
            hashTable.set(arr[i], 1)
        }
   }

   for(let i = 0 ; i < arr.length ; i++){
        if(hashTable.get(arr[i]) === 1){
            return arr[i]
        }
   }

   

    return null
}

// Time Complexity O(n)

export { findFirstUniqueHash, findFirstUnique };