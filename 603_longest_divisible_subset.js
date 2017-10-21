'use strict';

const largestDivisibleSubset = (nums) => {
    if (nums === null || nums.length <= 1) {
        return nums;
    }
    let size = nums.length;
    let dp = [];  // for given i, the length of subset if requirement is met.
    let preIndexs = []; // for given i, the previous element's index j if nums[i] % nums[j] === 0

    for (let i = 0; i < size; i++) {
        dp.push(1);
        preIndexs.push(-1);
    }
    // sort the nums
    nums.sort((num1, num2) => { return num1 - num2 });

    for (let i = 1; i < size; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                preIndexs[i] = j;
            }
        }
    };
    // find the longest of subset and its location (index)
    let largestLength = 0, lastIndex = -1;

    for (let i = 0; i < size; i++) {
        if (dp[i] > largestLength) {
            largestLength = dp[i];
            lastIndex = i;
        }
    }
    // find all element in subset
    let result = [];
    for (let i = 0; i < largestLength; i ++) {
        result.push(nums[lastIndex]);
        lastIndex = preIndexs[lastIndex];
    }
    return result;
};

// const main = () => {
//     let nums;
//     nums = [1, 2, 3];
//     console.log(largestDivisibleSubset(nums));
//     nums = [1, 2, 4, 8];
//     console.log(largestDivisibleSubset(nums));
// };
// main();
