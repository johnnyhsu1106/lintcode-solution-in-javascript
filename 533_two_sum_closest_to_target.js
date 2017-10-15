'use strict';

const twoSumClosest = (nums, target) => {
    if (nums === null || nums.length === 0) {
        return -1;
    }
    nums.sort((num1, num2) => { return num1 > num2 ? 1 : -1})
    let start = 0, end = nums.length - 1;
    let diff = Infinity;

    while(start < end) {

        diff = Math.min(diff, Math.abs(target - (nums[start] + nums[end])));
        if (nums[start] + nums[end] === target) {
            return 0;
        } else if (nums[start] + nums[end] > target) {
            end--;
        } else {
            start++;
        }
    }
    return diff;
};

// const main = () => {
//     let nums, target;
//     nums = [-1, 2, 1, -4];
//     target = 4;
//     console.log(twoSumClosest(nums, target));
// };
// main();
