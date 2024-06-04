// Design a data structure TwoStacks, that represents two stacks using a single array, where both stacks share the same array for storing elements.

// The following operations must be supported:

// push1(value): Takes an integer value and inserts it into the first stack.

// push2(value): Takes an integer value and inserts it into the second stack.

// pop1(): Removes the top element from the first stack and returns it.

// pop2(): Removes the top element from the second stack and returns it.

// Note: Perform all operations in-place without resizing the underlying list, maintaining a fixed size throughout.

class twoStacks {
  constructor(s) {
    this.size = s;
    this.stack = new Array(s).fill(null);
    this.top1 = -1;
    this.top2 = s;
  }
  //insert at top of first stack
  push1(value) {
    if (this.top1 < this.top2 - 1) {
      this.top1 += 1;
      this.stack[this.top1] = value;
    } else {
      console.log("Stack Overflow");
      process.exit(1);
    }
  }

  //insert at top of second stack
  push2(value) {
    if (this.top1 < this.top2 - 1) {
      this.top2 -= 1;
      this.stack[this.top2] = value;
    } else {
      console.log("Stack Overflow");
      process.exit(1);
    }
  }

  //remove and return value from top of first stack
  pop1() {
    if (this.top1 != null) {
      let value = this.stack[this.top1];
      this.top1 -= 1;
      return value;
    } else {
      console.log("Stack Overflow");
      process.exit(1);
    }
  }

  //remove and return value from top of second stack
  pop2() {
    if (this.top2 != null) {
      let value = this.stack[this.top2];
      this.top2 += 1;
      return value;
    } else {
      console.log("Stack Overflow");
      process.exit(1);
    }
  }
}
class twoStacksOriginal {
  constructor(s) {
    this.stack = new Array(s).fill(null);
    this.size;
  }
  //insert at top of first stack
  push1(value) {
    if (this.stack[0] === null) {
      this.stack.unshift(value);
    } else {
      let index = 0;

      while (this.stack[index] != null) {
        index += 1;
      }

      while (index != 0) {
        let valueToShift = this.stack[index - 1];

        this.stack[index] = valueToShift;

        index--;
      }

      this.stack[index] = value;
    }
  }

  //insert at top of second stack
  push2(value) {
    if (this.stack[this.stack.length - 1] === null) {
      this.stack.push(value);
    } else {
      let index = this.size;

      while (this.stack[index] != null) {
        index--;
      }

      while (index != this.size) {
        let valueToShift = this.stack[index + 1];

        this.stack[index] = valueToShift;

        index++;
      }

      this.stack[index] = value;
    }
  }

  //remove and return value from top of first stack
  pop1() {
    if (this.stack[0] === null) {
      return null;
    } else {
      return this.stack.shift();
    }
  }

  //remove and return value from top of second stack
  pop2() {
    if (this.stack[this.stack.length - 1] === null) {
      return null;
    } else {
      return this.stack.pop();
    }
  }
}

export { twoStacks };
