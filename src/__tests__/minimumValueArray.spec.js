import {findMinimum, findMinimumAlt, findMinimumSort  } from "../minimumValueArray"

describe('Minimum value in the array', () =>{


    it('Should Return 2' , () =>{

        const arr = [ 9, 2, 3, 6]

        expect(findMinimum(arr)).toEqual(2)
        expect(findMinimumAlt(arr)).toEqual(2)
        expect(findMinimumSort(arr)).toEqual(2)
    })
    it('Should Return -2' , () =>{
        
        const arr = [-1,-2,5,4]
        
        expect(findMinimum(arr)).toEqual(-2)
        expect(findMinimumAlt(arr)).toEqual(-2)
        expect(findMinimumSort(arr)).toEqual(-2)
    })
    it('Should Return -10' , () =>{
        
        const arr = [-1,-2,-3,-4,-10]
        
        expect(findMinimum(arr)).toEqual(-10)
        expect(findMinimumAlt(arr)).toEqual(-10)
        expect(findMinimumSort(arr)).toEqual(-10)
    })
    it('Should Return 2' , () =>{
        
        const arr = [2,2,2,2,2,2]
        
        expect(findMinimum(arr)).toEqual(2)
        expect(findMinimumAlt(arr)).toEqual(2)
        expect(findMinimumSort(arr)).toEqual(2)
    })
    it('Should Return 3' , () =>{
        
        const arr = [20,13,12,11,6,18,3]
        
        expect(findMinimum(arr)).toEqual(3)
        expect(findMinimumAlt(arr)).toEqual(3)
        expect(findMinimumSort(arr)).toEqual(3)
    })
})