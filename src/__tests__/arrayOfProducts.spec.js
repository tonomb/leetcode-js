import { findProduct } from "../arrayOfProducts"

describe('Array of Products of All Elements', () =>{


    it('Should return [24,12,8,6]', ()=>{

        const arr = [1,2,3,4]

        const solution = [24,12,8,6]
        expect(findProduct(arr)).toEqual(solution)
    })
    it('Should return [-48,0,0,0,0,0]', ()=>{

        const arr = [0,-1,2,-3,4,-2]

        const solution = [-48,0,0,0,0,0]
        
        expect(findProduct(arr)).toEqual(solution)
    })
    it('Should return [-72,-120,360,-60,-90]', ()=>{

        const arr = [5,3,-1,6,4]

        const solution = [-72,-120,360,-60,-90]
        expect(findProduct(arr)).toEqual(solution)
    })
    it('Should return [144,-168,-252,-336,-1008,-504]', ()=>{

        const arr = [-7,6,4,3,1,2]

        const solution = [144,-168,-252,-336,-1008,-504]
        expect(findProduct(arr)).toEqual(solution)
    })
    it('Should return [1,-1]', ()=>{

        const arr = [-1,1]

        const solution = [1,-1]
        expect(findProduct(arr)).toEqual(solution)
    })
    


})