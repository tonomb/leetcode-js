// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

export function checkValidParentheses(s){
    // Stacks
    const stack = []
    const keys = new Map()
    keys.set(')','(')
    keys.set('}','{')
    keys.set(']','[')

    const brackets = s.split('')

    for( let i = 0; i < brackets.length ; i++ ){
    
        if(brackets[i] == '(' || brackets[i] == '{' || brackets[i] =='['){
            stack.push(brackets[i])
        } else if( stack[stack.length -1] === keys.get(brackets[i])){
            // check if corresponding bracket 
            stack.pop()
        } else {
            stack.push(brackets[i])
        }

    }
    if(stack.length === 0){
        return true
    } else {
        return false 
    }
   
}