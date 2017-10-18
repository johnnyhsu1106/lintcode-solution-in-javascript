'use strict';

const moveZeroes = (nums) => {
    if (nums === null || nums.length === 0) {
        return nums;
    }
    let i = 0;
    let nonZeroIndex = 0;
    while (nonZeroIndex < nums.length) {
        while (nonZeroIndex < nums.length && nums[nonZeroIndex] === 0) {
            nonZeroIndex++;
        }
        if (nonZeroIndex < nums.length) {
            nums[i] = nums[nonZeroIndex];
            i++;
            nonZeroIndex++;
        }
    }
    while (i < nums.length) {
        nums[i] = 0;
        i++;
    }
};

// const main = () => {
//     let nums;
//     nums = [0, 1, 0, 3, 12];
//     moveZeroes(nums);
//     console.log(nums);
// };
// main();
