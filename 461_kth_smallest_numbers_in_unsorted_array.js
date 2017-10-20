'use strict';

const Heap = require('collections/heap');

const kthSmallest_heap = (k, nums) => {
    // use the heap
    if (nums.length === 0 || k === 0) {
        return null;
    }
    let maxHeap = new Heap();
    for (let num of nums) {
        maxHeap.push(num);
        if (maxHeap.length > k) {
            maxHeap.pop();
        }
    }
    return maxHeap.peek();

};
// const kthSmallest_quickSelect = () => {
//     // use the heap
// };


// const main = () => {
//     let nums, k;
//     nums = [3, 4, 1, 2, 5];
//     k = 2;
//     console.log(kthSmallest_heap(k, nums));
// };
// main();
