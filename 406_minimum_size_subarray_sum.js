'use strict';

const minimumSize = (nums, s) => {
    if (nums === null || nums.length === 0 || s === 0) {
        return -1;
    }
    let size = nums.length;
    let j = 0;
    let result = Infinity;
    let sum = 0;

    for (let i = 0; i < size; i++) {
        while (j < size && sum < s) {
            sum += nums[j];
            j++;
        }
        if (sum >= s) {
            result = Math.min(result, j - i);
            sum -= nums[i];
        }
    }
    if (result === Infinity) {
        return -1;
    }
    return result;
};

// 
// const main = () => {
//     let nums, s;
//     nums = [2,3,1,2,4,3];
//     s = 7;
//     console.log(minimumSize(nums, s));
// }
// main();
