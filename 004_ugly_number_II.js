'use strict';


const Heap = require('collections/heap');
const nthUglyNumber = (n) => {
    if (n === 1) {
        return 1;
    }
    let count = 0;
    let primes = [2, 3, 5];
    let uglyNums = new Set();
    let minHeap = new Heap([1], null, (a, b) =>{return b - a });

    while (minHeap.length !== 0) {
        let uglyNum = minHeap.pop();
        count++;
        if (count === n) {
            return uglyNum;
        }
        primes.forEach((prime) => {
            let newUglyNum = prime * uglyNum;
            if (! uglyNums.has(newUglyNum)) {
                minHeap.push(newUglyNum);
                uglyNums.add(newUglyNum);
            }
        });
    }
};


// const main = () => {
//     let n;
//     n = 10;
//     console.log(nthUglyNumber(n));
// };
// main();
