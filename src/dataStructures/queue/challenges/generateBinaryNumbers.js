import Queue from "./Queue.js";

function findBin(n) {
  let result = [];

  let binaryQueue = new Queue();

  binaryQueue.enqueue("1");

  for (let i = 0; i < n; i++) {
    let value = binaryQueue.dequeue();

    result.push(value);

    let s1 = value + "0";
    let s2 = value + "1";

    binaryQueue.enqueue(s1);
    binaryQueue.enqueue(s2);
  }

  return result;
}

export { findBin };
