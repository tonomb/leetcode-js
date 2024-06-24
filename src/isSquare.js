/*
You are receiving 2D GPS coordinates in a plane from some service and your task is to write a program that detects if a given point can create a square with any 3 previously seen points. 
Only squares consisting of horizontal and vertical lines are considered.

Let's denote the method as add(x, y) that returns true if (x,y) can be used to create a square, false otherwise.

Example input: [(3,5), (1,2)(1,5), (4,2), (4,5)]

Solutions:

  add(1,2) returns false
  add(3,5) returns false
  add(1,5) returns false
  add(4,2) returns false
  add(4,5) returns true - there is a square (1,2), (1,5), (4,5), (4,2)
  

*/

class CheckSquare {
  constructor() {
    this.cords = new Set();
  }

  check(x, y) {
    for (let cord of this.cords) {
      let [cordX, cordY] = cord.split(",").map(Number);
      let vertex1 = `${x},${cordY}`;
      let vertex2 = `${cordX},${y}`;

      if (cord == vertex1 || cord == vertex2) {
        return false;
      }
      if (this.cords.has(vertex1) && this.cords.has(vertex2)) {
        return true;
      }
    }
    return false;
  }

  add(x, y) {
    this.cords.add(`${x},${y}`);
  }
}

const square = new CheckSquare();
console.log(square.cords);
square.add(1, 2);
square.add(3, 5);
square.add(1, 5);
square.add(4, 2);
console.log(square.cords);

console.log(square.check(4, 5));
console.log(square.check(4, 2));
