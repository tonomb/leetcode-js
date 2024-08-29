import { Stack, MaxStack } from "../largestElementInStack";

describe("Largest Element in Stack", () => {
  it("should return null", () => {
    const stack = new Stack();

    expect(stack.peek()).toBe(null);
  });

  it("should return null", () => {
    const stack = new Stack();
    stack.push(1);

    expect(stack.peek()).toBe(1);
  });

  it("should return 2", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
  });

  it("should return 3", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
  });


  it('Should return 100', ()=>{

    const maxStack = new MaxStack()

    maxStack.push(100)
    maxStack.push(10)
    maxStack.push(1)
    maxStack.push(99)

    expect(maxStack.getMax()).toEqual(100)
  })

  it('should return 4' , ()=>{
      const maxStack = new MaxStack()
  
      maxStack.push(1)
      maxStack.push(2)
      maxStack.push(3)
      maxStack.push(4)
      maxStack.push(5)
      maxStack.pop()
  
      expect(maxStack.getMax()).toEqual(4)

  })
});

