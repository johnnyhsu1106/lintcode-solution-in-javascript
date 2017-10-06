'use strict';
const searchRange = (nums, target) => {
    if (nums === null || nums.length === 0) {
        return [-1, -1];
    }
    // find the first position of target

    let first = findFirstTargetIndex(nums, target);
    let last = findLastTargetIndex(nums, target);
    if (first === -1 && last === -1) {
        return [-1, -1];
    }
    return [first, last];


};
const findFirstTargetIndex = (nums, target) => {
    let start = 0,  end = nums.length - 1;
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (nums[start] === target) {
        return start;
    }
    if (nums[end] === target) {
        return end;
    }
    return -1;

};

const findLastTargetIndex = (nums, target) => {
    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] > target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    if (nums[end] === target) {
        return end;
    }
    if (nums[start] === target) {
        return start;
    }
    return -1;


};


// const main = () => {
//     let nums, target;
//     nums = [5, 7, 7, 8, 8, 10];
//     target = 8;
//     console.log(findLastTargetIndex(nums, target))
//
// };
// main();
