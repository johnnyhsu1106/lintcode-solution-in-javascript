'use strict';

class TwoSum {
    constructor() {
        this.nums = new Map();
    }

    add(num) {
        if (! this.nums.has(num)) {
            this.nums.set(num, 0);
        }
        this.nums.set(num, this.nums.get(num) + 1);

    }
    find(value) {

        for (let num of this.nums.keys()) {
            let found;
            let remain = value - num;
            if (this.nums.has(remain)) {
                if (remain === num) {
                    found = this.nums.get(num) >= 2;
                } else {
                    found = true;
                }
                if (found) {
                    return true;
                }
            }
        }
        return false;
    }

}

// const main = () => {
//     let twoSum = new TwoSum();
//     twoSum.add(1);
//     twoSum.add(2);
//     twoSum.add(2)
//     console.log(twoSum.find(1));
//     console.log(twoSum.find(3));
//     console.log(twoSum.find(4));
// };
// main();
