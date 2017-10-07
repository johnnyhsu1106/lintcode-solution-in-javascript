'use strict';

const totalOccurence = (nums, target) => {
    // 1. find the first position of target
    // 2. find the last position of target
    // 3. return last - first  + 1

    // first position of target
    let first = null, last = null;

    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (nums[start] === target) {
        first = start;
    }
    if (nums[end] === target) {
        first = end;
    }

    // last position of target
    start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] > target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    if (nums[end] === target) {
        last = end;
    }
    if (nums[start] === target) {
        last = start;
    }
    // return last - first  + 1
    if (first !== null && last !== null) {
        return last - first + 1
    }
    return 0;
};


// const main = () => {
//     let nums, target;
//     nums = [1, 3, 3, 4, 5];
//     target = 3;
//     console.log(totalOccurence(nums, target));
//
//     nums = [2, 2, 3, 4, 6];
//     target = 4;
//     console.log(totalOccurence(nums, target));
//
//     nums = [1, 2, 3, 4, 5];
//     target = 6;
//     console.log(totalOccurence(nums, target));
//
// };
//
// main();
