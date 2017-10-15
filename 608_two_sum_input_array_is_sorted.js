'use strict';

const twoSum = (nums, target) => {
    if (nums === null || nums.length === 0) {
        return [];
    }
    let start = 0, end = nums.length - 1;
    while (start < end) {
        if (nums[start] + nums[end] === target) {
            return [start + 1, end + 1];
        }
        else if (nums[start] + nums[end] > target) {
            end--;
        }
        else {
            start++;
        }
    }
    return [];
};


// const main = () => {
//     let nums, target;
//     nums = [2, 7, 11, 15];
//     target = 13;
//     console.log(twoSum(nums, target));
// };
// main();
