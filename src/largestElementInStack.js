
// Use your Stack class to implement a new class MaxStack with a method get_max() that returns the largest element in the stack. get_max() should not remove the item.
export class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}


export class MaxStack extends Stack {
    constructor(){
        super()
        this.max = [100]
        //this.items [100,10, 1 , 99]
    }

    push(element){
        if(element > this.max[this.max.length -1 ] || this.isEmpty()){
            this.max.push(element)   
        } 
        this.items.push(element) 
    }

    pop(){
        const curr = this.items.pop()
        if(curr === this.max[this.max.length - 1]){
            this.max.pop()
        }
        return this.items.pop()

    }

    getMax(){
        return this.max[this.max.length -1]
    }
}