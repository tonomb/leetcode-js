import { findFirstUnique, findFirstUniqueHash } from "../firstUniqueInt"

describe('First Unique Integer in an array', () =>{


    it('Should Return 9', ()=>{

      const arr = [9,2,3,2,6,6]
      
      expect(findFirstUnique(arr)).toEqual(9)
      expect(findFirstUniqueHash(arr)).toEqual(9)
    })
    it('Should Return 5', ()=>{

      const arr = [4,5,1,2,0,4]

      expect(findFirstUnique(arr)).toEqual(5)
      expect(findFirstUniqueHash(arr)).toEqual(5)
    })
    it('Should Return 4', ()=>{

      const arr = [4]

      expect(findFirstUnique(arr)).toEqual(4)
      expect(findFirstUniqueHash(arr)).toEqual(4)
    })
    it('Should Return -6', ()=>{

      const arr = [2,2,-6]

      expect(findFirstUnique(arr)).toEqual(-6)
      expect(findFirstUniqueHash(arr)).toEqual(-6)
    })
    it('Should Return -9', ()=>{

      const arr = [-9,-10,-10,-11,-11]

      expect(findFirstUnique(arr)).toEqual(-9)
      expect(findFirstUniqueHash(arr)).toEqual(-9)
    })
    it('Should Return 7', ()=>{

      const arr = [5,5,6,6,7,8,9,9]

      expect(findFirstUnique(arr)).toEqual(7)
      expect(findFirstUniqueHash(arr)).toEqual(7)
    })
    it('Should Return 20', ()=>{

      const arr = [-9,1,8,-9,20,1,8]

      expect(findFirstUnique(arr)).toEqual(20)
      expect(findFirstUniqueHash(arr)).toEqual(20)
    })
})