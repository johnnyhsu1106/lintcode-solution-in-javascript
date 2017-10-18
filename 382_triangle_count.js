'use strict';

const triangleCount = (nums) => {

    nums.sort((num1, num2) => {return num1 > num2 ? 1 : -1});
    let count = 0;

    for (let i = 2; i < nums.length; i ++) {
        let start = 0, end = i - 1;
        while (start < end) {
            if (nums[start] + nums[end] > nums[i]) {
                count += end - start;
                end--;
            } else {
                start++
            }
        }
    }
    return count;
};

// const main = () => {
//     let nums;
//     nums = [3, 4, 6, 7];
//     console.log(triangleCount(nums));
//     nums = [4, 4, 4, 4];
//     console.log(triangleCount(nums));
// };
// main();
