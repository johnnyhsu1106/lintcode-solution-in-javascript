'use strict';

const subsets = (nums) => {
    if (nums === null || nums.length === 0) {
        return [];
    }
    let results = [];
    let subset = [];
    dfs(nums, 0, subset, results);

    return results;
};

const dfs = (nums, start, subset, results) => {
    // exit of recursion
    results.push(subset.concat([]));
    let size = nums.length;
    for (let i = start; i < size; i++) {
        subset.push(nums[i]);
        dfs(nums, i + 1, subset, results)
        subset.pop();
    }
};


// const main = () => {
//     let nums;
//     nums = [1, 2, 3];
//     console.log(subsets(nums));
// };
// main();
