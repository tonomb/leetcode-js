import {checkValidParentheses } from '../validParentheses'

describe('Check Valid Parentheses', () =>{



    it('"()" Should Return True', ()=>{

        const input = "()"
        const result = checkValidParentheses(input)
        expect(result).toEqual(true)
    })
    it('"()[]{}" Should Return True', ()=>{

        const input = "()[]{}"
        const result = checkValidParentheses(input)
        expect(result).toEqual(true)
    })
    it('"(]"Should Return false', ()=>{

        const input = "(]"
        const result = checkValidParentheses(input)
        expect(result).toEqual(false)
    })
    it('"(){]"Should Return false', ()=>{

        const input = '(){]'
        const result = checkValidParentheses(input)
        expect(result).toEqual(false)
    })
    it('"({}) "Should Return true', ()=>{

        const input = '({})'
        const result = checkValidParentheses(input)
        expect(result).toEqual(true)
    })
    it('"({[{[()]}]}) "Should Return true', ()=>{

        const input = '({})'
        const result = checkValidParentheses(input)
        expect(result).toEqual(true)
    })
    it('"({[{[()]}}) "Should Return false', ()=>{

        const input = '({[{[()]}})'
        const result = checkValidParentheses(input)
        expect(result).toEqual(false)
    })
})