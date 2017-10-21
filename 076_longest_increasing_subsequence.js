'use strict';

const longestIncreasingSubsequence = (nums) => {
    // use DP to solve this problem
    if (nums === null || nums.length === 0) {
        return 0;
    }
    // initailize the dp
    let dp = [];
    let size = nums.length;
    for (let i = 0; i < size; i++) {
        dp.push(1);
    }
    // DP
    for (let i = 1; i < size; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    //  find the max in all dp
    let longest = - Infinity;
    for (let i = 0; i < size; i++) {
        longest = Math.max(longest, dp[i])
    }
    return longest;
};


// const main = () => {
//     let nums;
//     nums = [5, 4, 1, 2, 3];
//     console.log(longestIncreasingSubsequence(nums) === 3);
//     nums = [4, 2, 4, 5, 3, 7];
//     console.log(longestIncreasingSubsequence(nums) === 4);
// };
// main();
