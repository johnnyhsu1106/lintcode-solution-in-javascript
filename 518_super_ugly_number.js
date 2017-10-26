'use strict';

const Heap = require('collections/heap');

const nthSuperUglyNumber = (n, primes) => {
    if (n === 0 || primes.length === 0) {
        return -1;
    }
    let minHeap = new Heap([1], null, (num1, num2) => {return num2 - num1});
    let set = new Set([0]);
    let count = 0;

    while (minHeap.length !== 0) {
        let uglyNum = minHeap.pop();
        count++;
        if (count === n) {
            return uglyNum;
        }
        for (let prime of primes) {
            let newUglyNum = uglyNum * prime;
            if (! set.has(newUglyNum)) {
                minHeap.push(newUglyNum);

                set.add(newUglyNum);
            }
        }
    }
};


// const main = () => {
//     let n, primes;
//     n = 6;
//     primes = [2, 7, 13, 19];
//     console.log(nthSuperUglyNumber(n, primes));
// };
// main();
