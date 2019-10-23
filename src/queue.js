const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.heap = new MaxHeap();

		if(!maxSize) {
			this.maxSize = 30;
		} else {
			this.maxSize = maxSize;
		}
	}

	push(data, priority) {
		if (this.size() >= this.maxSize) 
			throw new Error;
		return this.heap.push(data, priority);
	}

	shift() {
		if (this.isEmpty()) 
			throw new Error;
		this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
