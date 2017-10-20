'use strict';

const subsetsWithDup = (nums) => {
    if (nums === null || nums.length === 0) {
        return [];
    }
    let results = [];
    let subset = [];
    nums.sort((num1, num2) => {return num1 > num2 ? 1 : -1});
    dfs(nums, 0, subset, results);

    return results;
};

const dfs = (nums, startIdx, subset, results) => {
    results.push(subset.concat([]))
    let size = nums.length;
    for (let i = startIdx; i < size; i++) {
        if (i === 0 || nums[i] !== nums[i - 1] || i === startIdx) {
            subset.push(nums[i]);
            dfs(nums, i + 1, subset, results);
            subset.pop();
        }

    }
};


// const main = () => {
//     let nums;
//     nums = [1, 2, 2];
//     console.log(subsetWithDup(nums));
// }
// main();
