'use strict';

const Heap = require('collections/heap');
class Solution {
    constructor(k) {
        this.k = k;
        this.minHeap = new Heap([], null, (a, b) => {return b - a});
    }
    add(num) {
        this.minHeap.push(num);
        if (this.minHeap.length > this.k) {
            this.minHeap.pop();
        }
    }
    topk() {
        return this.minHeap.sorted((a, b) => { return b - a });
    }
}

// const main = () => {
//     let s;
//     s = new Solution(3);
//     s.add(3);
//     s.add(10);
//     console.log(s.topk()); //[10, 3]
//
//     s.add(1000);
//     s.add(-99);
//     console.log(s.topk()); // [1000, 10, 3]
//
//     s.add(4);
//     console.log(s.topk()); // [1000, 10, 4]
//
//     s.add(100);
//     console.log(s.topk()); // [1000, 100, 10]
// };
// main();
