export class MaxHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }

  insert(value) {
    if (this.elements >= this.heap.length) {
      this.elements += 1;
      this.heap.push(value);
      this.__percolateUp(this.heap.length - 1);
    } else {
      this.heap[this.elements] = value;
      this.elements += 1;
      this.__percolateUp(this.elements - 1);
    }
  }

  getMax() {
    if (this.elements != 0) {
      return this.heap[0];
    } else {
      return null;
    }
  }

  removeMax() {
    if (this.elements > 1) {
      let max = this.heap[0];
      this.heap[0] = this.heap[this.elements - 1];
      this.elements -= 1;
      this.__maxHeapify(0);
      return max;
    } else if (this.elements === 1) {
      let max = this.heap[0];
      this.elements = this.elements - 1;
      return max;
    } else {
      return null;
    }
  }

  __percolateUp(index) {
    let parent = Math.floor((index - 1) / 2);
    if (index <= 0) {
      return;
    } else if (this.heap[parent] < this.heap[index]) {
      let temp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[index] = temp;
      this.__percolateUp(parent);
    }
  }

  __maxHeapify(index) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let largest = index;

    if (this.elements > left && this.heap[largest] < this.heap[left]) {
      largest = left;
    }
    if (this.elemets > left && this.heap[largest] < this.heap[right]) {
      largest = right;
    }
    if (largest != index) {
      let temp = this.heap[largest];
      this.heap[largest] = this.heap[index];
      this.heap[index] = temp;
      this.__maxHeapify(largest);
    }
  }

  buildHeap(arr) {
    this.heap = arr;
    this.elements = this.heap.length;

    for (let i = this.heap.length - 1; i >= 0; i--) {
      this.__maxHeapify(i);
    }
  }
}
