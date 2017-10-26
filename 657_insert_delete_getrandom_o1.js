'use strict';

class RandomizedSet {
    constructor() {
        this.arr = [];
        this.set = new Set();
    }
    insert(val) {
        if (! this.set.has(val)) {
            this.arr.push(val);
            this.set.add(val);
            return true;
        }
        return false;
    }
    remove(val) {
        if (this.set.has(val)) {
            this.arr.splice(this.arr.indexOf(val), 1);
            this.set.delete(val);
            return true;
        }
        return false;

    }
    getRandom() {
        let randomInt = Math.floor(Math.random()  * this.arr.length);
        return this.arr[randomInt];
    }
}
