export class MinHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }

  insert(val) {
    if (this.elements >= this.heap.length) {
      this.elements += 1;
      this.heap.push(val);
      this.__percolateUp(this.elements - 1);
    } else {
      this.heap[this.elements] = val;
      this.elements += 1;
      this.__percolateUp(this.elements - 1);
    }
  }

  getMin() {
    if (this.heap.length != 0) {
      return this.heap[0];
    } else {
      return null;
    }
  }

  removeMin() {
    if (this.elements > 1) {
      let min = this.heap[0];
      this.heap[0] = this.heap[this.elements - 1];
      this.elements -= 1;
      this.__minHeapify(0);
      return min;
    } else if (this.elements == 1) {
      let min = this.heap[0];
      this.elements -= 1;
      return min;
    } else {
      return null;
    }
  }

  __percolateUp(index) {
    let parent = Math.floor((index - 1) / 2);

    if (index <= 0) {
      return;
    } else if (this.heap[parent] > this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];

      this.__percolateUp(parent);
    }
  }

  __minHeapify(index) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;

    let smallest = index;

    if (this.elements > left && this.heap[smallest] > this.heap[left]) {
      smallest = left;
    }
    if (this.elements > right && this.heap[smallest] > this.heap[right]) {
      smallest = right;
    }
    if (smallest != index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      this.__minHeapify(smallest);
    }
  }

  buildHeap(arr) {
    this.heap = arr;
    this.elements = arr.length - 1;
    for (let i = this.heap.length - 1; i >= 0; i--) {
      this.__minHeapify(i);
    }
  }
}
