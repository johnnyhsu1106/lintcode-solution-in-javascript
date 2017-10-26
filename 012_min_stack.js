'use strict';

class MinStack {
    constructor() {
        this.minStack = [];
        this.stack = [];
    }
    push(num) {
        this.stack.push(num);
        if (this.minStack.length === 0) {
            this.minStack.push(num);
        } else {
            this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], num));
        }

    }
    pop() {
        if (this.stack.length !== 0) {
            this.minStack.pop();
            return this.stack.pop();
        }
        return null;
    }

    min() {
        if (this.minStack.length !== 0) {
            return this.minStack[this.minStack.length - 1];
        }
        return null;

    }
}
