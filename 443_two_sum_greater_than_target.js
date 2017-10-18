'use strict';

const twoSum2 = (nums, target) => {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    nums.sort((num1, num2) => { return num1 > num2 ? 1 : -1 })
    let start = 0, end = nums.length - 1;
    let count = 0;
    while (start < end) {
        if (nums[start] + nums[end] > target) {
            count += end - start;
            end--;
        } else {
            start++
        }
    }
    return count;
};


// const main = () => {
//     let nums, target;
//     nums = [2, 15, 7, 11, 16];
//     target = 24;
//     console.log(twoSum2(nums, target)); // ans = 3
// };
// main();
