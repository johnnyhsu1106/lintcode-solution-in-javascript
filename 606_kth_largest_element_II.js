'use strict';
//  The difference between
const Heap = require('collections/heap');

const kthLargestElement2 = (nums, k) => {
    if (nums.length === 0 || k === 0) {
        return null;
    }
    let minHeap = new Heap([], null, (a, b) => {return b - a});
    for (let num of nums) {
        minHeap.push(num);
        if (minHeap.length > k) {
            minHeap.pop();
        }
    }
    return minHeap.peek();
};


// const main = () => {
//     let nums, k ;
//     nums = [9,3,2,4,8];
//     k = 3;
//     console.log(kthLargestElement2(nums, k));
//
// };
// main();
