class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	constructor() {
  		this.storage = {};
 		this.count = 0;
  	}
	push(value) {
		this.count++;
		this.storage[this.count] = value;
	}

	pop() {
		if (this.count > 0) {
			var trash = this.storage[this.count];
			this.count--
			return trash;
		}
	}

	size() {
		return this.count;
	}
}