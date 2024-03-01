// Implement a function, findProduct(arr), which modifies an array so that each index has a product of all the numbers present in the array except the number stored at that index.

// Note: The size of an array should be greater than or equal to 2.

// Input 
// An array of numbers (can even be floats, integers, and negative!)

// Output 
// An array such that each index has a product of all the numbers in the array except the number stored at that index.

// Sample Input 
// arr = [1,2,3,4]
// Sample Output 
// arr = [24,12,8,6]

function findProduct(arr) {

    let productArr = []

    for(let i = 0; i < arr.length ; i++){
        let total = 1
        for( let j = 0 ; j < arr.length ; j++){
            if( i != j){
                total = total * arr[j]
            }
        }
        productArr.push(total)
    }
    productArr = productArr.map( value => Object.is(value, -0) ? 0: value)
    return productArr
}

export { findProduct };

// Time Complexity O(n^2)

