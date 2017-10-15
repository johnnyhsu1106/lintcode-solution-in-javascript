'use strict';

const twoSum5 = (nums, target) => {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    nums.sort((num1, num2) => {return num1 > num2 ? 1 : -1 })
    let count = 0;
    let start = 0, end = nums.length - 1;

    while (start < end) {
        if (nums[start] + nums[end] <= target) {
            count += end - start ;
            start++;
        } else {
            end--;
        }
    }
    return count;
};



// const main = () => {
//     let nums, target;
//
//     nums = [2, 7, 11, 15];
//     target = 24;
//     console.log(twoSum5(nums, target));
//
//     nums = [7, 11, 2, 15];
//     target = 24;
//     console.log(twoSum5(nums, target));
// };
// main();
