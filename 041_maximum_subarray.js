'use strict';

const maxSubArray = (nums) => {
    // max(sum(nums[i, k]) = max(p[k] - min(p[k-1], p[k-2],....p[i-1]))
    // i = 0, p[k] - 0
    if (nums.lentgh === 0) {
        return 0;
    }
    let sum = 0;
    let minPreSum = 0;
    let maxSum = -Infinity;
    nums.forEach((num) => {
        sum += num;
        maxSum = Math.max(maxSum, sum - minPreSum)
        minPreSum = Math.min(sum, minPreSum);
    });
    return maxSum;
};

// const main = () => {
//     let nums;
//     nums = [-2,1,-3,4,-1,2,1,-5,4];
//     console.log(maxSubArray(nums));
// };
// main();
