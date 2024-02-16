
export const twoSumPointers = function(nums, target) {

    let pointerA = 0
    let pointerB = 1

    for( let i = pointerA ; i < nums.length ; i++){
      for( let j = pointerB ; j< nums.length ; j++){

        const total = nums[pointerA] + nums[pointerB]

        if(total === target){
          return [ pointerA, pointerB]
        }
  
        pointerB += 1  
      }
      pointerA += 1
      pointerB = pointerA +1
    }

};


export function twoSumHash(nums, target) {
    const numToIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }
    return [];
}


