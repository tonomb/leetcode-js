
import { findSecondMaximum, findSecondMaximumSort } from "../secondMaximumArrar";


describe('Find the Second Maximum value in array', () =>{


    it('Should return 6', () =>{
        const arr = [ 9,2,3,6]
        expect(findSecondMaximum(arr)).toEqual(6)
        expect(findSecondMaximumSort(arr)).toEqual(6)
    })

    it('Should return 4', () =>{
        const arr = [ 4,2,1,5,0]
        expect(findSecondMaximum(arr)).toEqual(4)
        expect(findSecondMaximumSort(arr)).toEqual(4)
    })

    it('Should return -2', () =>{
        const arr = [-2,9]
        expect(findSecondMaximum(arr)).toEqual(-2)
        expect(findSecondMaximumSort(arr)).toEqual(-2)
    })

    it('Should return -3', () =>{
        const arr = [-2,-3,-5,-7]
        expect(findSecondMaximum(arr)).toEqual(-3)
        expect(findSecondMaximumSort(arr)).toEqual(-3)
    })
    it('Should return 5', () =>{
        const arr = [2,9,5,4,0]
        expect(findSecondMaximum(arr)).toEqual(5)
        expect(findSecondMaximumSort(arr)).toEqual(5)
    })
    it('Should return 5', () =>{
        const arr = [4,-2,5,-2,5,6]
        expect(findSecondMaximum(arr)).toEqual(5)
        expect(findSecondMaximumSort(arr)).toEqual(5)
    })
    it('Should return 9', () =>{
        const arr = [4,10,10,8,9]
        expect(findSecondMaximum(arr)).toEqual(9)
        expect(findSecondMaximumSort(arr)).toEqual(9)
    })
})