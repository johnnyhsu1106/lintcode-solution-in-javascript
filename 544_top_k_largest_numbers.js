'use strict';

const Heap = require('collections/heap');

const topk = (nums, k) =>  {
    if (nums === null || nums.length === 0 || k === 0) {
        return [];
    }
    let minHeap = new Heap([], null, (a, b) => {return b - a});
    nums.forEach((num) => {
        minHeap.push(num);
        if (minHeap.length > k) {
            minHeap.pop();
        }
    });

    return minHeap.sorted((num1, num2) => {return num2 - num1});

};

// const main = () => {
//     let nums, k;
//     nums =  [3,10,1000,-99,4,100];
//     k = 3;
//     console.log(topk(nums, k));
// };
// main();
