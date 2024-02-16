import {twoSumHash, twoSumPointers } from '../twoSum' 


describe('Testing Two Sum With Pointers', ()=>{
    it('Should Return [0,1]', ()=>{
        const nums = [2,7,11,15] 
        const target = 9
        expect(twoSumPointers(nums,target)).toEqual([0,1])
    })
    it('Should Return [1,2]', ()=>{
        const nums = [3,2,4] 
        const target = 6
        expect(twoSumPointers(nums,target)).toEqual([1,2])
    })
    it('Should Return [2,4]', ()=>{
        const nums = [-1,-2,-3,-4,-5] 
        const target = -8
        expect(twoSumPointers(nums,target)).toEqual([2,4])
    })
    it('Should Return [0,2]', ()=>{
        const nums = [3,2,3] 
        const target = 6
        expect(twoSumPointers(nums,target)).toEqual([0,2])
    })
})

describe('Testing Two Sum With Hash', ()=>{
    it('Should Return [0,1]', ()=>{
        const nums = [2,7,11,15] 
        const target = 9
        expect(twoSumHash(nums,target)).toEqual([0,1])
    })
    it('Should Return [1,2]', ()=>{
        const nums = [3,2,4] 
        const target = 6
        expect(twoSumHash(nums,target)).toEqual([1,2])
    })
    it('Should Return [2,4]', ()=>{
        const nums = [-1,-2,-3,-4,-5] 
        const target = -8
        expect(twoSumHash(nums,target)).toEqual([2,4])
    })
    it('Should Return [0,2]', ()=>{
        const nums = [3,2,3] 
        const target = 6
        expect(twoSumHash(nums,target)).toEqual([0,2])
    })
})